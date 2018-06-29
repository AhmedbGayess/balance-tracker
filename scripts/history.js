// Selectors 
const expenseBtn = document.querySelector("#expense-btn");
const incomeBtn = document.querySelector("#income-btn");
const expensesDiv = document.querySelector("#expenses");
const incomeDiv = document.querySelector("#income");
const expensesContainer = document.querySelector("#expenses-container");
const incomeContainer = document.querySelector("#income-container");
const backBtn = document.querySelector("#back");
const searchExpense = document.querySelector("#expense-search");
const searchIncome = document.querySelector("#income-search");


// ID of the user
const userId = location.hash.substring(1);

// Find the user with ID
const user = users.find((user) => {
    return user.id === userId;
})

// Switch from expenses history to income history and vice versa
expenseBtn.addEventListener("click", () => {
    incomeDiv.classList.add("back");
    expensesDiv.classList.remove("back");
})

incomeBtn.addEventListener("click", () => {
    incomeDiv.classList.remove("back");
    incomeDiv.classList.add("front")
    expensesDiv.classList.add("back");
})

// Back to balance tracker
backBtn.addEventListener("click", () => {
    location.assign(`balance.html#${user.id}`)
})

// Create expenses cards
const expensesDOM = (expense) => {
    // Create Card
    const expenseCard = document.createElement("div");
    expenseCard.classList.add("card")
    // Create expense message
    const expenseMessage = document.createElement("p");
    expenseMessage.textContent = expense.expenseMessage;
    expenseMessage.classList.add("card-message");
    // Create timestamp message
    const timestampMessage = document.createElement("p");
    timestampMessage.textContent = `Added ${expense.timestamp}`;
    timestampMessage.classList.add("timestamp");
    // Append messages to card and card to container
    expenseCard.appendChild(expenseMessage);
    expenseCard.appendChild(timestampMessage);
    expensesContainer.appendChild(expenseCard)
}

// Create income cards
const incomeDOM = (income) => {
    // Create Card
    const incomeCard = document.createElement("div");
    incomeCard.classList.add("card")
    // Create income message
    const incomeMessage = document.createElement("p");
    incomeMessage.textContent = income.incomeMessage;
    incomeMessage.classList.add("card-message");
    // Create timestamp message
    const timestampMessage = document.createElement("p");
    timestampMessage.textContent = `Added ${income.timestamp}`;
    timestampMessage.classList.add("timestamp");
    // Append messages to card and card to container
    incomeCard.appendChild(incomeMessage);
    incomeCard.appendChild(timestampMessage);
    incomeContainer.appendChild(incomeCard);
}

// Search expense and render
let expenseFilter = "";

searchExpense.addEventListener("input", (e) => {
    expenseFilter = e.target.value;
    renderExpenses()
})

const renderExpenses = () => {
    expensesContainer.innerHTML = "";
    const filteredExpenses = user.expensesHistory.filter((expense) => {
        return expense.expenseMessage.toLowerCase().includes(expenseFilter.toLowerCase());
    })
    if (filteredExpenses.length > 0) {
        filteredExpenses.forEach((expense) => {
            expensesDOM(expense);
        })
    }
}

renderExpenses();

// Search income and render 
let incomeFilter = "";

searchIncome.addEventListener("input", (e) => {
    incomeFilter = e.target.value;
    renderIncome()
})

const renderIncome = () => {
    incomeContainer.innerHTML = "";
    const filteredIncome = user.incomeHistory.filter((income) => {
        return income.incomeMessage.toLowerCase().includes(incomeFilter.toLowerCase());
    })
    if (filteredIncome.length > 0) {
        filteredIncome.forEach((income) => {
            incomeDOM(income);
        })
    }
}

renderIncome();