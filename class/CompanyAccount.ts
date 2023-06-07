import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  debt: number = 0

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.debt += amount
      console.log('Voce pegou um empréstimo de ' + amount)
    } else {
      console.log('Conta inativa!')
    }
  }
}
