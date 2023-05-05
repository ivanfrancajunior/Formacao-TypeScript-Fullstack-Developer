import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number
  private regularValue = 10
  
  constructor(doc_id: number, name: string, accountNumber: number,status:boolean,balance:number){
    super(name, accountNumber,status,balance)
    this.doc_id = doc_id
  }
  regularDeposit = (regularValue:number):void => {
    
    if (this.checkStatus() === true) {
      this.deposit(regularValue)
    }

  }

  
}