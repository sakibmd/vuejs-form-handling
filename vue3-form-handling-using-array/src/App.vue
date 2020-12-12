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
              />{{ name }}
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
              <input type="radio" v-model="gender" value="Female" />
              Female<br />
              {{ gender }}
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
              Teaching <br /><input
                type="checkbox"
                v-model="hobby"
                value="Dancing"
              />
              Dancing <br />
              <input type="checkbox" v-model="hobby" value="Coding" /> Coding
            </div>
            <button class="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mt-5" v-if="allUserInfo.length > 0">
          <h2 class="m-auto py-4">All Students Record</h2>
          <ul>
            <li v-for="(item, index) in allUserInfo" :key="index">
              <di class="card m-3">
                <div class="card-body">
                  <strong>Index:</strong> {{ index }}
                  <a
                    @click.prevent="removeStudent(index)"
                    class="btn btn-danger float-right btn-sm"
                    >X</a
                  >
                  <br />
                  <strong>Name:</strong> {{ item.sname }} <br />
                  <strong>Age:</strong> {{ item.sage }}<br />
                  <strong>Department:</strong> {{ item.sdepartment }}<br />
                  <strong>Hobbies: </strong>
                  <span v-for="item in item.shobby" :key="item">
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
  data() {
    return {
      name: "",
      age: null,
      gender: "",
      department: "Science",
      hobby: [],
      allUserInfo: [],
    };
  },
  methods: {
    saveUserData() {
      this.allUserInfo.push({
        sname: this.name,
        sage: this.age,
        sgender: this.gender,
        sdepartment: this.department,
        shobby: this.hobby,
      });

      (this.name = ""),
        (this.age = null),
        (this.gender = ""),
        (this.department = ""),
        (this.hobby = []),
        console.log(this.allUserInfo);
      console.log(this.allUserInfo.length);
    },

    removeStudent(index) {
      this.allUserInfo.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
