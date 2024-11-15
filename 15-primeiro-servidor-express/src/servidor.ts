import express, { RequestHandler, Request, Response, NextFunction } from 'express'

const servidor = express()

const controlador: RequestHandler = (req: Request, res: Response ) => {
    res.send('Meu primeiro servidor Node.js com express e TypeScript')
    return Promise.resolve();
}

servidor.get('/home', controlador)

servidor.listen(3000)