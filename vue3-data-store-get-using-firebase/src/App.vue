<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card p-4 mt-5">
          <h3>Enter New Student</h3>
          <hr />
          <form @submit.prevent="saveUserData">
            <div class="form-group">
              <input
                type="text"
                v-model="name"
                placeholder="Enter Name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                v-model="age"
                placeholder="Enter Age"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label for="gender">Gender</label>
              <br /><input type="radio" v-model="gender" value="Male" /> Male
              <br />
              <input type="radio" v-model="gender" value="Female" /> Female
              <br />
            </div>

            <div class="form-group">
              <select v-model="department" class="form-control">
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>

            <div class="form-group">
              <label> Enter Your Hobby</label>
              <br /><input type="checkbox" v-model="hobby" value="Gardening" />
              Gardening <br />
              <input type="checkbox" v-model="hobby" value="Teaching" />
              Teaching <br />
              <input type="checkbox" v-model="hobby" value="Dancing" />
              Dancing <br />
              <input type="checkbox" v-model="hobby" value="Coding" />
              Coding
            </div>
            <button class="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mt-5">
          <h2 class="py-4 ml-2">
            All Students Record
            <a
              href=""
              @click.prevent="getAllStudentsInfo"
              class="btn btn-info float-right mr-2"
            >
              Reload
            </a>
          </h2>

          <p v-if="loading">Loading...</p>
          <p v-else-if="!loading && errors!=null" class="lead text-center">Fetch Error. Please Check The Condition Again!</p>
          <p
            v-else-if="!loading && allStudentsInfo.length === 0"
            class="text-center lead"
          >
            No Students Found. Please Add Some Student
          </p>
          <ul
            v-else-if="
              !loading && allStudentsInfo && allStudentsInfo.length > 0
            "
          >
            <li v-for="(item, index) in allStudentsInfo" :key="index">
              <di class="card m-3">
                <div class="card-body">
                  <strong>Index:</strong> {{ index }}
                  <br />
                  <strong>Name:</strong> {{ item.name }} <br />
                  <strong>Age:</strong> {{ item.age }}<br />
                  <strong>Department:</strong> {{ item.department }}<br />
                  <strong>Hobbies: </strong>
                  <span v-for="item in item.hobby" :key="item">
                    <strong>#{{ item }} </strong> </span
                  ><br />
                </div>
              </di>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.getAllStudentsInfo();
  },

  data() {
    return {
      name: "",
      age: null,
      gender: "",
      department: "Science",
      hobby: [],
      allStudentsInfo: [],
      loading: true,
      errors: null,
    };
  },
  watch: {
    allStudentsInfo: function () {
      this.getAllStudentsInfo();
    },
  },
  methods: {
    saveUserData() {
      fetch(
        "https://student-info-96dab-default-rtdb.firebaseio.com/students.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            age: this.age,
            gender: this.gender,
            department: this.department,
            hobby: this.hobby,
          }),
        }
      );

      (this.name = ""),
        (this.age = null),
        (this.gender = ""),
        (this.department = ""),
        (this.hobby = []);
    },
    getAllStudentsInfo() {
      fetch(
        "https://student-info-96dab-default-rtdb.firebaseio.com/students.json"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.loading = false;
          this.errors = null;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              age: data[id].age,
              gender: data[id].gender,
              department: data[id].department,
              hobby: data[id].hobby,
            });
          }
          this.allStudentsInfo = results;
        })
        .catch((error) => {
          this.loading = false;
          this.errors = error;
        });
    },
  },
};
</script>

<style></style>
