let languages = [];

fetch("data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        languages = data.languages
        console.log(languages)
        //console.log(data)

        let area = [];
        for (let lang of languages) {
            item = `
                <div class="card my-3 p-3">
                
                    <label>Id</label>
                    <input value=${lang.id} class="form-control" />
                    <label>Development</label>
                    <input value=${lang.development} class="form-control" />
                
                </div>
            `

            area.push(item)

        }
        document.querySelector("#area").innerHTML = area;


        

        //show in list
        for (let info of languages) {
            let ul = document.querySelector("#list");
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`Id: ${info.id} & Dev: ${info.development}`));
            li.className = 'list-group-item';
            ul.appendChild(li);
        }


    });