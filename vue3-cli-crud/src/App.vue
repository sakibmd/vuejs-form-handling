<template>
  <section id="crud">
    <div class="container my-4">
      <div class="row">
        <div class="col-md-4">
          <h3 v-if="newStudentForm">Add New Student</h3>
          <h3 v-else>Edit Student</h3>
          <div class="card m-2 p-2">
            <form @submit.prevent="saveUserData">
              <div class="form-group">
                <label class="font-weight-bold">Enter Name</label>
                <input
                  type="text"
                  name="name"
                  v-model="name"
                  placeholder="Enter Name"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label class="font-weight-bold">Enter Your Age</label>
                <input
                  type="number"
                  name="age"
                  v-model="age"
                  placeholder="Enter Age"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <label class="font-weight-bold"> Gender</label>
                <br /><input type="radio" v-model="gender" value="Male" /> Male
                <br />
                <input type="radio" v-model="gender" value="Female" />
                Female<br />
              </div>

              <div class="form-group">
                <label class="font-weight-bold">Enter Department</label>
                <select v-model="department" class="form-control">
                  <option value="">choose department</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>

              <div class="form-group">
                <label class="font-weight-bold">Enter Your Hobby</label>
                <br /><input
                  type="checkbox"
                  v-model="hobby"
                  value="Gardening"
                />
                Gardening <br />
                <input type="checkbox" v-model="hobby" value="Teaching" />
                Teaching <br /><input
                  type="checkbox"
                  v-model="hobby"
                  value="Dancing"
                />
                Dancing <br />
                <input type="checkbox" v-model="hobby" value="Coding" /> Coding
              </div>
              <button class="btn btn-success btn-sm">Submit</button>
            </form>
          </div>
        </div>
        <div class="col-md-8">
          <div v-if="allStudents.length > 0" class="card p-2 m-2">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Department</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Hobby</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(student, index) in allStudents" :key="index">
                    <td>{{ student.name }}</td>
                    <td>{{ student.age }}</td>
                    <td>{{ student.department }}</td>
                    <td>{{ student.gender }}</td>
                    <td>
                      <span
                        v-for="(hobbtItem, index) in student.hobby"
                        :key="index"
                        >#{{ hobbtItem }}</span
                      >
                    </td>
                    <td>
                      <a
                        href=""
                        @click.prevent="editStudent(index)"
                        class="btn btn-info btn-sm m-2"
                        >Edit</a
                      >
                      <a
                        href=""
                        @click.prevent="removeStudent(index)"
                        class="btn btn-danger btn-sm"
                        >Remove</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else class="card p-3 m-3 bg-info text-white text-center">
            <h2>No Student Found</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
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
};
</script>

<style>
</style>
