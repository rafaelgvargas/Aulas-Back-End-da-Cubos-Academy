const soma = require('./soma')

describe('teste de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 6)).toBe(9)
    })

    it('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 6)).not.toBe(10)
    })  
})
