import socketio from 'socket.io-client'

const socket = socketio('https://3333-faf1a301-71e0-49e3-893b-169419f076fb.ws-us02.gitpod.io', {
    autoConnect: false
});

function subscribeToNewDevs(subscribeFunction){
    console.log('subscribeToNewDevs')
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude, longitude, techs
    }

    socket.connect()

    socket.on('message', msg=>{console.log(msg)})
}

function disconnect(){
    if(socket.connected){
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
}