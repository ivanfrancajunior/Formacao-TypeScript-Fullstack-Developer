export abstract class DefaultAccount {
    
    private name: string;
    private status:boolean = true
    readonly accountNumber: number;
    readonly balance: number = 0;

    constructor(name: string, accountNumber: number) {
        this.name = name; 
        this.accountNumber = accountNumber;
        
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Você depoistou')
             
        }

    }
    withdraw = (): void => {
        if (this.validateStatus()) {
            
            console.log('Você sacou!')
        }
    }
    
    getBalance = (): void => {
       
        if (this.validateStatus()) { 
            console.log(this.balance)
        }
    }

    setName = (name:string) :void  => {
        this.name = name
        console.log(`NEW NAME: ${name}`)
    }

    getName = ():string => {
        return this.name
    }

    private validateStatus = ():boolean => {
        if (this.status) {
            return this.status
        }
        
        throw new Error('Conta inválida')
    }
}