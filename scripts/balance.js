// Selectors
const expenseInput = document.querySelector("#expense-input");
const expenseObj = document.querySelector("#expense-object");
const expenseBtn = document.querySelector("#expense-btn");
const incomeInput = document.querySelector("#income-input");
const incomeObj = document.querySelector("#income-source");
const incomeBtn = document.querySelector("#income-btn");
const balanceDOM = document.querySelector("#amount");
const currecncyDOM = document.querySelector("#currency-dom");
const expenseForm = document.querySelector("#expense-form");
const incomeForm = document.querySelector("#income-form");
const history = document.querySelector("#history-btn");
const name = document.querySelector("#name");
const balanceMessage = document.querySelector("h2");

// ID of the user
const userId = location.hash.substring(1);

// Find the user with ID
const user = users.find((user) => {
    return user.id === userId;
})
name.textContent = `${user.firstName} ${user.lastName}`


// Render amount and currency to DOM
const render = () => {
    balanceDOM.textContent = user.balance;
    currecncyDOM.textContent = user.currency;
    if(Number(user.balance) > 0) {
        balanceMessage.style.color = "#50C878";
    } else if (Number(user.balance) < 0) {
        balanceMessage.style.color = "#EC073F";
    } else {
        balanceMessage.style.color = "#000";
    }
}

render();

// Add expense

const addExpense = (user) => {
    // Change the amount
    const newExpense = Number(expenseInput.value);
    user.balance = Number(user.balance) - newExpense;
    expenseInput.value = "";
    expenseObj.value = "";
    saveUsers();
    render();
    
}

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
        addExpenseToHistory(user)
        addExpense(user);
})

// Add income

const addIncome = (user) => {
    // Change the amount
    const newIncome = Number(incomeInput.value);
    incomeInput.value = "";
    incomeObj.value = "";
    user.balance = Number(user.balance) + newIncome;
    saveUsers();
    render();
}

incomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
        addIncomeToHistory(user);
        addIncome(user);
})


// Save incomes and expenses to localStorage

const addIncomeToHistory = (user) => {
    user.incomeHistory.push({
        timestamp: moment().format("dddd DD/MM/YY HH:mm"),
        incomeMessage: incomeObj.value 
    })
}

const addExpenseToHistory = (user) => {
    user.expensesHistory.push({
        timestamp: moment().format("dddd DD/MM/YY HH:mm"),
        expenseMessage: expenseObj.value
    })
}

// Go to history page 
history.addEventListener("click", () => {
    location.assign(`history.html#${user.id}`)

})

