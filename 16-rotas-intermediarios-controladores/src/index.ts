import { meuPrimeiroIntermediário, intermediarioGeral } from './intermediarios';
import { itemProdutos, buscarUsuario, buscarUsuarioQuery } from './controladores';
import express from "express"
import 'dotenv/config'

const servidor = express()

servidor.use(intermediarioGeral)
servidor.get('/produtos/:item', meuPrimeiroIntermediário,itemProdutos)
servidor.get('/usuarios/:email', buscarUsuario)
servidor.get('/usuarios', buscarUsuarioQuery)

servidor.listen(process.env.PORT)