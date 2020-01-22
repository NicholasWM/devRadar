const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
const {findConnections, sendMessage} = require('../websocket')

module.exports = {
    async store(req, res){
        const {github_username, techs, latitude, longitude} = req.body
        const response = await axios.get(`https://api.github.com/users/${github_username}`)
        const {name = login, avatar_url, bio} = response.data

        const techs_array = parseStringAsArray(techs)

        const location = {
            type:'Point',
            coordinates:[longitude, latitude]
        }
        let dev = await Dev.findOne({github_username})

        if(!dev){
            console.log('criando DEV')
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techs_array,
                location
            })
            // Filtrar as conexoes que estao no maximo a 10km de distancia 
            //e que o novo dev tenha pelo menos uma das techs filtradas
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techs_array,
            )
            
            sendMessage(sendSocketMessageTo, 'new-dev', dev)
        }

        return res.json(dev)
    },
    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    }
}