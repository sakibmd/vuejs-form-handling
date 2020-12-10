<template>
  <div id="app" class="container">
    <h2 class="my-5">Dynamic Form</h2>
    <input
      type="text"
      placeholder="Name"
      v-model="name"
      class="form-control"
    /><br />
    <input
      type="number"
      placeholder="Age"
      v-model="age"
      class="form-control"
    /><br />

    <div v-if="moreField.length > 0" class="my-2">
      <div v-for="(field, index) in moreField" :key="index">
        <div v-if="field.type === ''">
          <p>Please select a field type</p>
          <select @change="onChange($event, index)">
            <option>Please select</option>
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
          </select>
          
        </div>
        <div v-else-if="field.placeholder === ''" >
          <p>Please enter a placeholder</p>
          <div class="d-flex">
          <input type="text" placeholder="enter placeholder"   v-model="placeholder"><a @click="addPlaceholder($event, index)" class="btn btn-dark btn-sm">Enter</a>

          </div>
          
        </div>
        <div v-else>
          <div v-if="field.type === 'text'" class="d-flex my-2">
            <input
              type="field.type"
              v-model="field.value"
              :placeholder="field.placeholder"
              class="form-control"
            /><a class="btn btn-danger btn-sm" @click="removeField(index)">X</a>
          </div>
          <div v-if="field.type === 'textarea'" class="d-flex my-2">
            <textarea :placeholder="field.placeholder"  v-model="field.value" class="form-control" /><a
              class="btn btn-danger btn-sm"
              @click="removeField(index)"
              >X</a
            >
          </div>
          <div v-if="field.type === 'radio'" class="d-flex my-2">
            <input
              type="field.type"
              :placeholder="field.placeholder"
              v-model="field.value"
              class="form-control"
            /><a class="btn btn-danger btn-sm" @click="removeField(index)">X</a>
          </div>
          <div v-if="field.type === 'checkbox'" class="d-flex my-2">
            <input
              type="field.type"
              :placeholder="field.placeholder"
              v-model="field.value"
              class="form-control"
            /><a class="btn btn-danger btn-sm" @click="removeField(index)">X</a>
          </div>
        </div>
      </div>
    </div>

    <button @click="addMoreField" class="btn btn-primary mr-2">Add New Input Field</button>
    <button @click="saveToLocalstorage" class="btn btn-success">Save</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      age: "",
      moreField: [],
      placeholder:'',
    };
  },
  methods: {
    addMoreField() {
      this.moreField.push({
        type: "",
        value: "",
        placeholder:""
      });
    },
    onChange(ev, index) {
      this.moreField[index].type = ev.target.value;
    },
    addPlaceholder(ex, index){
      this.moreField[index].placeholder = this.placeholder;
      this.placeholder = '';
    },
    saveToLocalstorage() {
      localStorage.setItem("name", this.name);
      localStorage.setItem("age", this.age);
      localStorage.setItem("moreField", JSON.stringify(this.moreField));
    },
    removeField(index) {
      this.moreField.splice(index, 1);
    },
  },
  created() {
    // this.name = localStorage.getItem("name");
    // this.age = localStorage.getItem("age");
    // this.moreField = JSON.parse(localStorage.getItem("moreField"));
  },
};
</script>

<style>
</style>
