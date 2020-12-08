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


    });