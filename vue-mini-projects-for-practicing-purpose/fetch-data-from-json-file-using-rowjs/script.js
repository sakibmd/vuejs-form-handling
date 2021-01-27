var app = Vue.createApp({
    data() {
        return {
            users: [],
        }
    },
    methods: {
        allUsers() {
           
            fetch('data.js')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.users = data;
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