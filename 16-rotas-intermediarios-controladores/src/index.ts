import { itemProdutos, buscarUsuario, buscarUsuarioQuery } from './controladores';
import express , { Request, Response } from "express"
import 'dotenv/config'

const servidor = express()

servidor.get('/produtos/item', itemProdutos)
servidor.get('/usuarios/:email', buscarUsuario)
servidor.get('/usuarios', buscarUsuarioQuery)

servidor.listen(process.env.PORT)