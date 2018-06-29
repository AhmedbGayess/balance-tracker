const userNameInput = document.querySelector("#username-login");
const passwordInput = document.querySelector("#password-login");
const loginBtn = document.querySelector("#button-login");
const alertContainer = document.querySelector("#alert-container");
const alertMessage = document.querySelector(".alert");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Check if username exists
    const exists = users.find((user) => {
        return user.userName === userNameInput.value;
    })

    if (exists && exists.password === passwordInput.value) {
        location.assign(`balance.html#${exists.id}`)
    } else if (userNameInput.value === "" && passwordInput.value === "") {
        alertMessage.innerHTML = "Enter a username and a password";
        alertContainer.classList.remove("hide");
        setTimeout(() => {
            alertContainer.classList.add("hide");
        }, 3000)
    } else if (passwordInput.value === "") {
        alertMessage.innerHTML = "Enter a password";
        alertContainer.classList.remove("hide");
        setTimeout(() => {
            alertContainer.classList.add("hide");
        }, 3000)
    } else if (exists && exists.password !== passwordInput.value) {
        //wrong password
        alertMessage.innerHTML = "<strong>Wrong password!</strong> Try Again";
        alertContainer.classList.remove("hide");
        setTimeout(() => {
            alertContainer.classList.add("hide");
        }, 3000)
    } else if (userNameInput.value === "") {
        alertMessage.innerHTML = "Enter a username";
        alertContainer.classList.remove("hide");
        setTimeout(() => {
            alertContainer.classList.add("hide");
        }, 3000)
    } else {
        //try again
        alertMessage.innerHTML = "<strong>Username doesn't exist!</strong> Try Again";
        alertMessage.classList.remove("alert-warning");
        alertMessage.classList.add("alert-danger");
        alertContainer.classList.remove("hide");
        setTimeout(() => {
            alertContainer.classList.add("hide");
            alertMessage.classList.add("alert-warning");
            alertMessage.classList.remove("alert-danger");
        }, 3000)
    }

})
