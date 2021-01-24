var app = Vue.createApp({
    data() {
        return {
            name: '',
            age: null,
            division: '',
            hobby: [],
            gender: '',
            students: []
        }
    },
    methods: {
        addNewStudent() {
            this.students.push({
                name: this.name,
                age: this.age,
                division: this.division,
                hobby: this.hobby,
                gender: this.gender,
            });
            this.name = '';
            this.age = '';
                this.division = '';
                this.hobby = [];
                this.gender = '';
        },
        removeStudent(index) {
            this.students.splice(index, 1);
        }
    }

})

app.mount('#app');