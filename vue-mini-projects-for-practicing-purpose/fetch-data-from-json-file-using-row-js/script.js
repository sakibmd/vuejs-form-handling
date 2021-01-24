var users = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        users = data;
        //console.log(users);
        let allUsersInfo = [];
        for (let user of users) { //show data in div
            singleUser = `
                <div class="card col-md-3 m-2 p-2">
                     <h6> <strong>Name: </strong> ${user.name} </h6> <br>  
                     <h6> <strong>Username: </strong> ${user.username} </h6> <br>  
                     <h6> <strong>Email: </strong> ${user.email} </h6> <br>  
                </div>
            `;
            allUsersInfo.push(singleUser);
        }
        document.querySelector('.single-user-info').innerHTML = allUsersInfo;



        for (let i of users) {
            let ul = document.querySelector(".unordered-list");
            let li = document.createElement("li");
            li.className = "list-group-item";
            let text = `Name: ${i.name} & Email: ${i.email}`;
            li.appendChild(document.createTextNode(text));
            ul.appendChild(li);
        }


        
            let userinfo = users.map((x) => {
                let li = document.createElement("li");
                li.className = "list-group-item";
                let text = `Name: ${x.name} & Email: ${x.email}`;
                li.appendChild(document.createTextNode(text));
                return li;
            });
      
        userinfo.forEach(li => {
            document.querySelector(".using-map").appendChild(li);
        });


    })