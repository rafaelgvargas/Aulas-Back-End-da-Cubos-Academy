import subtracao from './subtracao'

describe('teste de subtracao', () => {
    test('deve verificar o resultado de uma subtração', () => {
        expect(subtracao(6, 2)).toBeCloseTo(4)
        expect(subtracao(6, 8)).toBeCloseTo(-2)
        expect(subtracao(6, 6)).toBeCloseTo(0)
    })
    test('deve verificar o resultado incorreto de uma subtracao', () => {
        expect(subtracao(6, 2)).not.toBe(5)
    })
})