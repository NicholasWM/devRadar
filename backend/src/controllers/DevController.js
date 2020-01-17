const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
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
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techs_array,
                location
            })
        }

        return res.json(dev)
    },
    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    }
}