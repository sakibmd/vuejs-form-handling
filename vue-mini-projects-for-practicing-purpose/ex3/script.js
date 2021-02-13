let items = ''

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();

    })
    .then(data => {
        items = data;
        let allUser = [];
        items.forEach(item => {
            let user = `
                <label>Name</label>
                <input type="text" value=${item.name} >

                <label>Email</label>
                <input type="email" value=${item.email} >
                <hr class="hr"/>
            `

            allUser.push(user);
        });

        document.querySelector(".row").innerHTML = allUser;


    })