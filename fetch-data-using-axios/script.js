let users = [];

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        users = res.data;
        const allUsers = users.map(user => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            let text = `Name: ${user.name} | Email: ${user.email}`;
            li.appendChild(document.createTextNode(text));
            return li;
        })
        //console.log(allUsers);

    
        allUsers.forEach(li => {
            document.querySelector(".list-group").appendChild(li);
        });
        
    })