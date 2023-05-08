import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'teste@teste.com'

    it('Deve exibir um alert com boas vindas',async() => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })
    it('Não deve exibir um alert de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo!`)
    })
    it('Deve receber um alerta de email inválido', async () => {
        await login('a')
        expect(mockAlert).toHaveBeenCalledWith(`Email inválido`)
    })
})