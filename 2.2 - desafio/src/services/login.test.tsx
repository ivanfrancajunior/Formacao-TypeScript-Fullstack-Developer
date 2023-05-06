import { greeting } from "./login"

describe('greeting', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        greeting()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo! 🍦')
    })
})