// Inputs
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const balanceInput = document.querySelector("#balance");
const currencyInput = document.querySelector("#currency");
const signupBtn = document.querySelector("#signup-button");
const alertContainer = document.querySelector("#alert-container");
const alertMessage = document.querySelector(".alert");
const form = document.querySelector("form");

// User Class 
class User {
    constructor(userName, password, firstName, lastName, balance, currency) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
        this.currency = currency;
        this.incomeHistory = [];
        this.expensesHistory = [];
        this.id = uuidv4();
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    // New User 
    const newUser = new User(userNameInput.value, passwordInput.value, firstNameInput.value, lastNameInput.value, balanceInput.value, currencyInput.value);

    // Check if username is taken and add user if it's not
    let exists;
    const checkUsers = () => {
        users.forEach((user) => {
            if (user.userName === userNameInput.value) {
                exists = true;
            } else {
                exists = false
            }
        })
    }

    checkUsers()

    if (!exists) {
        users.push(newUser);
        saveUsers();
        location.assign(`balance.html#${newUser.id}`);
    } else {
        alertContainer.classList.remove("hide");
        setTimeout(() => {
            alertContainer.classList.add("hide");
        }, 3000)
        userNameInput.value = "";
        passwordInput.value = "";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
})

