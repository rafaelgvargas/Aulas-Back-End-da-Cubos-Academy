import { Request, Response } from "express"

const pessoas = [
    { nome: 'Rafael', email: 'Rafael@email.com' },
    { nome: 'Leticia', email: 'Leticia@email.com' },
    { nome: 'Guilherme', email: 'Guilherme@email.com' }
]

export const itemProdutos = (req: Request, res: Response) => {
    console.log(req.params.item);    
    res.send("Cheguei no controlador");
}

export const buscarUsuario = (req: Request, res: Response) => {
    const { email } = req.params
    const pessoa = pessoas.find(pessoa => pessoa.email === email);
    if (!pessoa) {
      res.send('Usuário não encontrado!');
    } else {
      res.send(pessoa);
    }
  }

export const buscarUsuarioQuery = (req: Request, res: Response) => {
    const { email } = req.query
    if (!email) {
        res.send('Parametro não encontrado!');
    }
    const pessoa = pessoas.find(pessoa => pessoa.email === email);
    if (!pessoa) {
        res.send('Usuário não encontrado!');
    }
    res.send(pessoa)
}