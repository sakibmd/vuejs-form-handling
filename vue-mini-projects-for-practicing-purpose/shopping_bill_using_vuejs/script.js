var app = Vue.createApp({
    data() {
        return {
            newItem: '',
            items: [{
                    name: 'Mango',
                    price: 45.50
                },
                {
                    name: 'Banana',
                    price: 35.20
                }
            ]
        }
    },
    computed: {
        totalPrice() {
            var total = 0;
            this.items.forEach(item => {
                total += parseFloat(item.price);
            });
            return total.toFixed(2);
        }
    },
    methods: {
        addNewItem() {
            this.items.push({
                name: this.newItem,
                price: 0.0
            });
            this.newItem = '';
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }

})

app.mount('#app');