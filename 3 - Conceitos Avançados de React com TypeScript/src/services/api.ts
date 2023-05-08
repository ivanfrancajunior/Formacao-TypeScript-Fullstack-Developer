const account = {
    email: 'teste@teste.com',
    password: '123456',
    name: 'Usuario Default',
    balance: 2000,
    id:'1'
}

export const api = new Promise((resolve) => {
    
    setTimeout(() => {
        resolve(account)
    }, 3000);
})