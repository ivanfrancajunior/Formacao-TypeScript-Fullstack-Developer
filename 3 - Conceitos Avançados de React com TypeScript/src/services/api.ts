const account = {
    email: 'teste@teste.com',
    password: '123456',
    name: 'Usuario Comum'
}

export const api = new Promise((resolve) => {
    
    setTimeout(() => {
        resolve(account)
    }, 3000);
})