let account = {
  accountName: "Benjamin E",
  accountBalance: 100,

  getBalance: function () {
    alert("Your balance is: " + this.accountBalance + "KR");
  },

  deposit: function () {
    input = parseFloat(prompt("How much do you want to deposit?"));
    //Jag använder mig utav parseFloat eftersom att man ska kunna
    //ta ut och sätta in decimaler. Använder man inte parseFloat så kan man ej använda sig utav decimalerna.
    console.log(input);
    if (isNaN(input)) {
      checkForNanDeposit = true;
      this.accountError();
    } else if (input < 1) {
      checkDepositAmount = true;
      account.accountError();
    } else if (input >= 1) {
      this.accountBalance = this.accountBalance + input;
      alert("Successfully deposit: " + input + " KR");
      atm();
    }
  },

  withdrawal: function () {
    withdrawAmonut = parseFloat(prompt("How much do you want to withdraw?"));
    //Jag använder mig utav parseFloat eftersom att man ska kunna
    //ta ut och sätta in decimaler. Använder man inte parseFloat så kan man ej använda sig utav decimalerna.
    console.log(withdrawAmonut);
    if (withdrawAmonut > this.accountBalance) {
      console.log(checkWithdrawAmount);
      checkWithdrawAmount = true;
      console.log(checkWithdrawAmount);
      account.accountError();
    } else if (isNaN(withdrawAmonut)) {
      checkForNanWithdraw = true;
      this.accountError();
    } else if (withdrawAmonut < 1) {
      alert("You can't withdraw under 1kr");
      withdrawAmonut = null;
    } else if (withdrawAmonut >= 1) {
      this.accountBalance = this.accountBalance - withdrawAmonut;
      alert("Successfully withdraw: " + withdrawAmonut + " KR");
      withdrawAmonut = null;
    }

    console.log("sista raden i withdrawal");
  },

  getAccountName: function () {
    alert(`Account name: ${this.accountName}`);
  },

  accountError: function () {
    while (checkWithdrawAmount) {
      alert("Can't take out more then you have");
      checkWithdrawAmount = false;
      console.log(checkWithdrawAmount);
      account.withdrawal();
    }

    while (checkDepositAmount) {
      alert("You can't deposit under 1kr");
      checkDepositAmount = false;
      account.deposit();
    }
    while (checkForNanWithdraw || checkForNanDeposit) {
      alert("Not a Number, try again!");
      if (checkForNanWithdraw) {
        checkForNanWithdraw = false;
        this.withdrawal();
      } else if (checkForNanDeposit) {
        checkForNanDeposit = false;
        this.deposit();
      }
    }
  },

  exitAccount: function () {
    alert("exit");
  },
};

let checkForNanDeposit = false;
let checkForNanWithdraw = false;
let withdrawAmonut;
let choice;
let input;
let checkWithdrawAmount = false;
let checkDepositAmount = false;
let insertCard = false;

function atm() {
  if (!insertCard) {
    alert("You need to insert your card first!");
    return;
  }
  choice = prompt(
    "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdraw 4.) Get accountname 5.) Exit"
  );
  console.log(choice);
  if (isNaN(choice)) {
    alert("Not a Number!");
    atm();
  }
  if (choice == 1) {
    account.getBalance();
    console.log(account.accountBalance);
    atm();
  } else if (choice == 2) {
    account.deposit();
  } else if (choice == 3) {
    account.withdrawal();
    atm();
  } else if (choice == 4) {
    account.getAccountName();
    atm();
  } else if (choice == 5) {
    account.exitAccount;
  } else {
    alert("Try again");
    atm();
  }
}

function checkInsert() {
  alert("Card have been inserted, press start to make your decision");
  insertCard = true;
}
