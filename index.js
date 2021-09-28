const express = require('express')
const router = express()
const http = require('http').createServer(router)

http.listen(3000, function() {
    console.log('Listening on port 3000')
})

router.use(express.static(__dirname + '/public'))

router.get('/', function() {
    res.sendFile(__dirname + '/index.html')
})