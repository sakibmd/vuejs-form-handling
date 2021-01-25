var app = Vue.createApp({
    data() {
        return {
            name: '',
            age: null,
            moreFields: [],

            newFieldLabel: '',
            newFieldType: '',
            newFieldPlaceholder: '',
        }
    },
    methods: {
        addNewField() {
            if (this.moreFields.length > 0) {
                console.log('hello');
                var lastInput = this.moreFields[this.moreFields.length - 1];
                if (lastInput.type == '') {
                    return;
                }
            }
            this.moreFields.push({
                type: '',
                placeholder: '',
                label: ''
            });
        },
        newFieldDetails(index) {

            this.moreFields[index].type = this.newFieldType;
            this.moreFields[index].placeholder = this.newFieldPlaceholder;
            this.moreFields[index].label = this.newFieldLabel;

            this.newFieldType = '';
            this.newFieldPlaceholder = '';
            this.newFieldLabel = '';
        },

        removeInputForm(index) {
            this.moreFields.splice(index, 1);
        }
    },
    computed: {

    }
})

app.mount('#app');