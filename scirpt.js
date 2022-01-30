let account = {
  accountName: "Benjamin",
  accountBalance: 100,

  getBalance: function () {
    alert("Your balance is: " + this.accountBalance + "KR");
  },

  deposit: function () {
    input = parseFloat(prompt("How much do you want to deposit?"));
    console.log(input);

    if (input < 1) {
      alert("You can't deposit under 1kr");
    }
    if (input >= 1) {
      this.accountBalance = this.accountBalance + input;
      alert("Successfully deposit");
      atm();
    }
  },

  withdrawal: function () {
    withdrawAmonut = parseFloat(prompt("How much do you want to withdraw?"));
    //Ha en variabel som tar "variabel - accountBalance"

    if (withdrawAmonut < 1) {
      alert("You can't withdraw under 1kr");
    }
    if (withdrawAmonut >= 1) {
      this.accountBalance = this.accountBalance - withdrawAmonut;
      alert("Successfully withdraw: " + withdrawAmonut + " KR");
      atm();
    }
    console.log("test");
  },

  getAccountName: function () {
    alert(this.accountName);
  },

  accountError: function () {
    alert("error");
  },

  exitAccount: function () {
    alert("exit");
  },
};

let withdrawAmonut;
let choice;
let input;
//Kolla upp isNan
function atm() {
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
  }
  if (choice == 2) {
    account.deposit();
  }
  if (choice == 3) {
    account.withdrawal();
  }
  if (choice == 4) {
    account.getAccountName();
  }
  if (choice == 5) {
    account.exitAccount;
  }
  if (choice > 5) {
    account.alert("Try again");
    atm();
  }
}
