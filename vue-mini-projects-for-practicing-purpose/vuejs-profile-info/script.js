var app = Vue.createApp({
    data() {
        return {
            name: '',
            age: null,
            gender: '',
            hobby: [],
            division: '',
            isSubmitted: false
        }
    },
    methods: {
        saveData() {
            this.isSubmitted = true;
        },
        updateData() {
            this.isSubmitted = false;
        }
    }

})

app.mount('#app');