import express from "express"
import 'dotenv/config'

const servidor = express()

servidor.get("/produtos/:item", (req: any, res: any) => {
    console.log(req.params.item);    
    res.send("O nodemon está configurado com typescript");
})

const pessoas = [
    { nome: 'Rafael', email: 'Rafael@email.com' },
    { nome: 'Leticia', email: 'Leticia@email.com' },
    { nome: 'Guilherme', email: 'Guilherme@email.com' }
]

servidor.get('/usuarios/:email', (req: any, res: any) => {
    const { email } = req.params 

    const pessoa = pessoas.find((item) => {
        return item.email === email
    })

    if (!pessoa) {
        return res.send('Usuário não encontrado')
    }

    res.send(pessoa)
})

servidor.listen(process.env.PORT)