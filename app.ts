import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(10305645685, 'João da Silva', 103)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.withdraw(5)
peopleAccount.withdraw(18)
peopleAccount.deposit(15)
peopleAccount.withdraw(18)
console.log(peopleAccount.getBalance())


const companyAccount: CompanyAccount = new CompanyAccount('RND Tecnologia', 120)
console.log(companyAccount)
companyAccount.deposit(30)
companyAccount.withdraw(200)
companyAccount.withdraw(27)
console.log(companyAccount.getBalance())

const plusAccount: PlusAccount = new PlusAccount('DIO', 20)
console.log(plusAccount)
plusAccount.plusDeposit(50)
console.log(plusAccount.getBalance())