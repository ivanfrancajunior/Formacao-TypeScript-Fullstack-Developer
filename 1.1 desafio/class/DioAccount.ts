export abstract class DioAccount {
  private name: string
  private  accountNumber: number
  private  status: boolean = true
  private balance: number = 0
  
  constructor(name: string, accountNumber: number, status:boolean,balance:number){
    this.name = name
    this.accountNumber = accountNumber
    this.status = status
    this.balance = balance
    
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida.')
  }

  private positiveBalance = (): boolean => {
    if (this.balance > 0) {
      return this.status
    }
    throw new Error('Saldo insuficiente.')
  }

  private setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value:number): void => {
    if (this.validateStatus()) {
      
      let balance = this.balance += value 
      

      console.log(`Você depositou R$ ${value} reais, seu saldo é de R$ ${balance} reais.`)
    }
  }

  withdraw = (value:number): void => {
    if (this.validateStatus()) {
    
      if (this.positiveBalance()) {
      
        let balance = this.balance -=value
        
        console.log(`Você sacou R$ ${value}reais, seu saldo é de R$${balance} reais.`)
      }

    }
  }

  getBalance = (): void => {
    if (this.validateStatus()) {
      console.log(` Seu saldo é de R$ ${this.balance} reais.`)
      
    }
  }
  
  checkStatus(): boolean {
    if (this.status) {
      console.log('Conta ativa.')
    } else {
      
      throw new Error ('Conta não encontrada.')
    } 
    return this.status
  
  }
}
