var users = [];

function addUser() {
    var name = prompt("Enter your name");
    var ID = prompt("Enter your ID");
    var balance = prompt("Enter your balance");
    var user = {
        Name: name,
        ID: ID,
        balance: balance
    };
    users.push(user);
    console.log(users);

}
function editUserBalanceById() {
    var ID = prompt("Enter your ID to edit balance");
    var balance = prompt("Enter your balance");
    var user = users.find((user) => user.ID == ID);
    if (user) {
        user.balance = balance;
    } else {
        alert("User not found");
    }
    console.log(users);
}
function transferBalance() {
    var fromId = prompt("Enter send ID");
    var toId = prompt("Enter receive ID");
    var balance = (prompt("Enter balance transfer"));
    var user1 = users.find((user) => user.ID == fromId);
    var user2 = users.find((user) => user.ID == toId);
    if (user1 && user2) {
        user1.balance -= balance;
        user2.balance += balance;
        alert("Transfer successful");
    } else {
        alert("User not found");
    }
    console.log(users);
}
function deleteUserById() {
    var ID = prompt("Enter your ID to delete");
    var user = users.find((user) => user.ID == ID);
    if (user) {
        users = users.filter((user) => user.ID != ID);
        alert("User deleted");
    } else {
        alert("User not found");
    }
    console.log(users);
}

addUser();
addUser();
addUser();
console.log(users);
editUserBalanceById();
console.table(users);
transferBalance();
console.table(users);
deleteUserById();
console.table(users);

