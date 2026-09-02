let users = [
    {
        name: "ali",
        email: "ali@test.com",
    },
    {
        name: "beshoy",
        email: "beshoy@test.com",
    },
    {
        name: "sara",
        email: "sara@test.com",
    }
];

localStorage.setItem("users", JSON.stringify(users));

let userList = JSON.parse(localStorage.getItem("users"));

userList.push({
    name: "ahmed",
    email: "ahmed@test.com",
});

localStorage.setItem("users", JSON.stringify(userList));

let userContainer = document.getElementById("userContainer");

userList.forEach((user) => {

    let div = document.createElement("div");
    div.style.border = "1px solid black"
    div.style.margin = "10px";
    let name = document.createElement("p");
    let email = document.createElement("p");

    name.innerText = "Name: " + user.name;
    email.innerText = "Email: " + user.email;

    div.appendChild(name);
    div.appendChild(email);

    userContainer.appendChild(div);
});