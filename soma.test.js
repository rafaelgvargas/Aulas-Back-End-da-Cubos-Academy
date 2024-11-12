const soma = require('./soma')

test('deve verificar o resultado de uma soma', () => {
    expect(soma(3, 6)).toBe(9)
})