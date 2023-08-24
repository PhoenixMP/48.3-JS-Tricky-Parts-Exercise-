function createAccount(setupPin, amount = 0) {
    let accountPin = setupPin
    let bal = amount
    function checkInitalPin(pin) {
        const numPin = Number(accountPin)
        if (typeof numPin !== 'number') {
            return false
        } else { return true }
    }

    function comparePin(pin) {
        if (accountPin === pin) {
            return true
        } else { return false }
    }

    function checkBalance(pin) {
        if (comparePin(pin)) {
            return `$${bal}`
        } else { return "Invalid PIN." }
    }
    function deposit(pin, amt) {
        if (comparePin(pin)) {
            bal = amt + bal
            return `Succesfully deposited $${amt}. Current balance: $${bal}.`
        } else { return "Invalid PIN." }
    }
    function withdraw(pin, amt) {
        if (comparePin(pin)) {
            if (bal < amt) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            } else {
                bal = bal - amt;
                return `Succesfully withdrew $${amt}. Current balance: $${bal}.`
            }

        } else { return "Invalid PIN." }

    }
    function changePin(oldPin, newPin) {
        if (comparePin(oldPin)) {
            if (checkInitalPin(newPin)) {
                accountPin = newPin
                return "PIN successfully changed!"
            }

        } else { return "Invalid PIN." }

    }

    if (checkInitalPin(accountPin)) {
        return {
            checkBalance,
            deposit,
            withdraw,
            changePin
        }
    } else { return "Invalid PIN." }
}

module.exports = { createAccount };
