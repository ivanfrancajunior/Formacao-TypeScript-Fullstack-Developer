import {DefaultAccount} from './class/DefaultAccount'
import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from './class/CompanyAccount'


//DioBank - esboço
//herança + polimorfismo

console.log('DEFAULT: ',DefaultAccount)

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jota', 10)
console.log('ACC PESSOA COMUM:', peopleAccount )

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 29)
console.log('ACC EMPRESA:', companyAccount )