import { DefaultAccount } from './DefaultAccount' 

export class CompanyAccount extends DefaultAccount {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    getLoan = () => {
        console.log('Vôce pegou um emprestimo ok?')
    }
}