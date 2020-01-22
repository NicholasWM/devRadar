const socketio = require('socket.io')
const parseStringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')

let io
const connections = []
exports.setupWebSocket = (server) => {
    io = socketio(server)

    io.on('connection',socket=>{
        const {latitude, longitude, techs} = socket.handshake.query
        connections.push({
            id:socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs)
        })
        console.log(socket.id)
        console.log(socket.handshake.query)
    })
}

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10000
      && connection.techs.some(item => techs.includes(item))
  })
}
//to - Destinatarios
exports.sendMessage = (to, message, data) =>{
    console.log('to ',to.map(t=> t.id))
    to.forEach(connection => {
        console.log(`Enviando mensagem ${connection.id}, ${message}, ${data}`)
        io.to(connection.id).emit(message, data)
    })
}