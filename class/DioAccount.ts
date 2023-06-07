export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount
      console.log('Voce depositou ' + amount)
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.getBalance() < amount) {
        console.log('Saldo insuficiente!')
      } else {
        this.balance -= amount
        console.log('Voce sacou ' + amount)
      }
    } else {
      console.log('Conta Inativa')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (amount: number): void => {
    this.balance = amount
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }
}
