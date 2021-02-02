var app = Vue.createApp({
    data() {
        return {
            items: ''
        }
    },
    methods: {
        allUsers() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    return res.json();

                })
                .then(data => {
                    this.items = data;
                })
        }
    },
    mounted() {
        this.allUsers();
    },
    computed: {

    }
})

app.mount('#app');