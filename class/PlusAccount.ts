import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    plusDeposit = (amount: number): void => {
        if (this.validateStatus()) {
            let b = this.getBalance()
            b += (amount + 10)
            this.setBalance(b)
            console.log('Voce depositou ' + b)
        }
    }
}
