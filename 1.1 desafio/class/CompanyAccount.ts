import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status: boolean, balance: number) {
    super(name, accountNumber, status, balance)
  }

  getLoan = (value: number ): void => {
     
    if (this.checkStatus() === true) {
      
      this.deposit(value)
    }
      
    console.log(`Você recebeu um depósito de ${value}`)

      
   
  }
}