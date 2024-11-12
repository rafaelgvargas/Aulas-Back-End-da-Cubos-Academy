import soma from './soma'

describe('teste de soma', () => {
    test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 6)).toBeCloseTo(9)
    })

    it('deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 6)).not.toBeCloseTo(10)
    })  
})
