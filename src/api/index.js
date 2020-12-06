var socket = new WebSocket('ws://localhost:8080/ws')

let connect = cb => {
  console.log('Attempting connection...')
   
  socket.onopen = () => {
    console.log('Successfully connected!')
  }

  socket.onmessage = msg => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = e => {
    console.log(`Socket closed connectin: ${e}`)
  }

  socket.onerror = err => {
    console.log(`Socket error: ${err}`)
  }
}

let sendMsg = msg => {
  console.log(`sending msg: ${msg}`)
  socket.send(msg)
}

export { connect, sendMsg }
