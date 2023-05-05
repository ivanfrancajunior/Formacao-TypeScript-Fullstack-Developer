import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const newEnterprise:CompanyAccount = new CompanyAccount('novaEmpresa', 1,true,0)

const novaPessoa: PeopleAccount = new PeopleAccount(12, 'Marcio', 12, true, 0)

//console.log('EMPRESA: ', newEnterprise)
console.log('PESSOA: ', novaPessoa)

novaPessoa.regularDeposit(10)
novaPessoa.getBalance()



