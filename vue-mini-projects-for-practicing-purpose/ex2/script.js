let users = [];
let allUsers = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        users = data;
        allUsers = users.map(user => {
            let li = document.createElement("li");
            let text = `Name: ${user.name} and email: ${user.email}`;
            li.appendChild(document.createTextNode(text));
            return li;
        });

        allUsers.forEach(li => {
            document.querySelector("#ul").appendChild(li);
        });
    })