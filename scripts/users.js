const getStoredUsers = () => {
    const storedUsers = localStorage.getItem("Users");
    if (storedUsers !== null) {
        return JSON.parse(storedUsers);
    } else {
        return [];
    }
}

let users = getStoredUsers();

const saveUsers = () => {
    localStorage.setItem("Users", JSON.stringify(users))
}


