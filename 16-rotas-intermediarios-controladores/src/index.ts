import express , { Request, Response } from "express"
import 'dotenv/config'

const servidor = express()

servidor.get("/", (req, res) => {
    res.send("Servidor está ok!");
})

servidor.listen(process.env.PORT)