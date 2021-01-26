<template>
  <section id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 card p-3 m-3">
          <h2 class="text-center my-3">Dynamic Form ({{ moreFields }})</h2>
          <div class="form-control">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>

          <div class="form-control">
            <label for="age">Age</label>
            <input
              type="number"
              v-model="age"
              class="form-control"
              id="age"
              placeholder="Enter Age"
            />
          </div>

          <div v-if="moreFields.length > 0">
            <div v-for="(field, index) in moreFields" :key="index">
              <div v-if="field.type == '' ||  field.placeholder == '' || field.label == ''">
                  <form @submit.prevent="newFieldInfo(index)" class="card p-2 my-3" style="box-shadow: 3px 6px 15px grey ">
                    <h4>Enter New Field Info</h4>
                    <hr>
                    <select required class="form-control" v-model="newFieldType">
                      <option value="">Enter Field Type</option>
                      <option value="text">Text</option>
                      <option value="textarea">Textarea</option>
                      <option value="radio">Radio</option>
                      <option value="checkbox">Checkbox</option>
                    </select>
                    <input type="text" class="form-control" v-model="newFieldLabel" placeholder="Enter Field Label">
                    <input type="text" class="form-control" v-model="newFieldPlaceholder" placeholder="Enter Field Placeholder">
                    <button type="submit" class="btn btn-success">Confirm</button>
                  </form>
              </div>
              <div v-else>
                  <div v-if="field.type == 'text'">
                      <div class="form-group">
                          <label>{{ field.label }}</label>
                          <input :type="field.type" :placeholder="field.placeholder" class="form-control">
                      </div>
                  </div>
                   <div v-if="field.type == 'textarea'">
                      <div class="form-group">
                          <label>{{ field.label }}</label>
                          <textarea :placeholder="field.placeholder" class="form-control" rows="3"></textarea>
                      </div>
                  </div>
                   <div v-if="field.type == 'checkbox'">
                      <div class="form-group">
                          <input :type="field.type" :placeholder="field.placeholder"> {{ field.label }}
                      </div>
                  </div>
                   <div v-if="field.type == 'radio'">
                      <div class="form-group">
                          <input :type="field.type" :placeholder="field.placeholder"> {{ field.label }}
                      </div>
                  </div>
              </div>
            </div>
          </div>




          <div>
            <a type="button" class="btn btn-sm btn-info my-2" @click="addNewFields">Add New Fields</a>
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
      moreFields: [],

      newFieldType: '',
      newFieldPlaceholder: '',
      newFieldLabel:''

    };
  },
  methods: {
    addNewFields() {

      if(this.moreFields.length > 0){
        console.log('Hello');
        var lastInput = this.moreFields[this.moreFields.length - 1];
        if(lastInput.type == '' || lastInput.placeholder == '' || lastInput.label == ''){
          return;
        }
      }

      this.moreFields.push({
        type: "",
        placeholder: "",
        label: "",
      });
    },
    newFieldInfo(index){

      

      this.moreFields[index].type = this.newFieldType;
      this.moreFields[index].placeholder = this.newFieldPlaceholder;
      this.moreFields[index].label = this.newFieldLabel;

      this.newFieldType = '';
      this.newFieldPlaceholder = '';
      this.newFieldLabel = '';
    }
  },
};
</script>

<style>
</style>
