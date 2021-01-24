var app = Vue.createApp({
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.allUsersInfo();
    },
    methods: {
        allUsersInfo() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    //console.log(data);
                    this.users = data;
                })
        }
    }

})

app.mount('#app');