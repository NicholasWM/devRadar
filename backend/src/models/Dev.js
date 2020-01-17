const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username : String,
    bio: String,
    avatar_url: String,
    techs: [String],//Varias Strings
    location:{
        type: PointSchema,
        index: '2dsphere',
    }
})

module.exports = mongoose.model('Dev', DevSchema) // Nome que vai ser salvo no banco e o Schema
