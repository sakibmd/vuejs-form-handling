<template>
  <div class="row">
      
      <div class="col-md-4 p-2  card" v-for="(item, index) in items" :key="index">
          <h5>Name: {{ item.name }}</h5>
          <h5>Price: ${{ item.price }}</h5>
      </div>
      <hr>
      <div class="my-4 card m-auto" style="width:50%">
          <form @submit.prevent="addNewItem">
              <h2>Add New Item</h2>
              <input type="text" v-model="name" class="form-control" placeholder="enter name">
              <input type="number" v-model="price" class="form-control my-2" placeholder="enter price">
              <button type="submit" class="btn btn-success my-2">Add</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            price: ''
        }
    },
    props: ['items'],
    methods:{
        addNewItem(){
            var newItem = { name: this.name, price: this.price };
            this.name = '';
            this.price = '';
            this.$emit('newItemAdded', newItem);
        }
    }
}
</script>

<style>
    
</style>