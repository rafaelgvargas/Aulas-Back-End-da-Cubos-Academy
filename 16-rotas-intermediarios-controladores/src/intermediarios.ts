import { Request, Response, NextFunction } from "express";

export const meuPrimeiroIntermediário = (req: Request, res: Response, next: NextFunction) => {
    console.log('Estou no primeiro intermediário')

    if (req.params.item === 'sair') {
       res.send('A requisão foi respondida pelo intermediário, antes de chegar ao controlador');
    } else {
       return next()
    }
}

export const intermediarioGeral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passou no intermediário geral');
    
    return next()
}