import http from 'node:http'
import { jsonBodyHandler } from './middlewares/jsonBodyHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

const server = http.createServer(async (req, res) => {
    await jsonBodyHandler(req, res)
    routeHandler(req, res)
})

const PORT = 3333
server.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`))