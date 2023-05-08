const account = {
    email: 'email@email.com',
    password: '123456',
    name: 'Usuario Comum'
}

export const api = new Promise((resolve) => {
    
    setTimeout(() => {
        resolve(account)
    }, 3000);
})