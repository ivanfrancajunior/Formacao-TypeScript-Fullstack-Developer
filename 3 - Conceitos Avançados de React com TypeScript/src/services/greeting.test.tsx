import { greeting } from "./greeting"

describe('greeting', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail ='email@email.com'

    it('Deve exibir um alert com boas vindas', () => {
        greeting(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })
    it('Não deve exibir um alert de boas vindas sem o email', () => {
        greeting(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo!`)
    })
})