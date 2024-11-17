import express , { Request, Response } from "express"
import 'dotenv/config'

const servidor = express()

servidor.get("/", (req, res) => {    
    res.send("Servidor está ok!");
})

servidor.get("/usuarios", (req: Request, res: Response) => { 
    res.send("Listagem de usuários");
})

servidor.listen(process.env.PORT)