<template>
  <div class="container-fluid">
    <Navbar />
    <Items :items="items" @newItemAdded="newItem" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Items from "./components/Items";

export default {
  name: "App",
  data() {
    return {
      items: [
        { name: "Apple", price: 130 },
        { name: "Banana", price: 16 },
        { name: "Orange", price: 90 },
        { name: "Pineapple", price: 40 },
      ],
    };
  },
  components: {
    Navbar,
    Items,
  },
  methods: {
    newItem(item){
      console.log(item);
      this.items.push(item);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
