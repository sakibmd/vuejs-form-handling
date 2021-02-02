var app = Vue.createApp({
    data() {
        return {
            name: "",
            age: null,
            gender: "",
            department: "",
            hobby: [],
            allStudents: [],

            newStudentForm: true,
            editStudentIndex: null,
        };
    },
    methods: {
        saveUserData() {
            if (this.newStudentForm) {
                this.allStudents.push({
                    name: this.name,
                    age: this.age,
                    gender: this.gender,
                    department: this.department,
                    hobby: this.hobby,
                });
            } else {
                this.allStudents[this.editStudentIndex].name = this.name;
                this.allStudents[this.editStudentIndex].age = this.age;
                this.allStudents[this.editStudentIndex].gender = this.gender;
                this.allStudents[this.editStudentIndex].department = this.department;
                this.allStudents[this.editStudentIndex].hobby = this.hobby;

                this.editStudentIndex = null;
                this.newStudentForm = true;
            }

            this.name = "";
            this.age = null;
            this.gender = "";
            this.department = "";
            this.hobby = [];
        },
        removeStudent(index) {
            this.allStudents.splice(index, 1);
        },
        editStudent(index) {
            this.editStudentIndex = index;
            this.newStudentForm = false;

            this.name = this.allStudents[index].name;
            this.age = this.allStudents[index].age;
            this.gender = this.allStudents[index].gender;
            this.department = this.allStudents[index].department;
            this.hobby = this.allStudents[index].hobby;
        },
    },
})

app.mount('#app');