//DioBank - esboço

class Account {
    name: string;
    accountNumber: number;

    constructor(name: string, accountNumber: number) {
        this.name = name; 
        this.accountNumber = accountNumber
    }

    deposit =() => {
        console.log('Você depoistou')
    }
    withdraw = () => {
        console.log('Você sacou!')
    }
}
console.log(Account)

const newAccount: Account = new Account('Dono', 1)
console.log('acc do Dono:', newAccount)

const accout: Account = new Account('João', 28)
accout.deposit()