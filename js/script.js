const { createApp } = Vue;

createApp({
    data() {
        return {
            todoItem: '',
            newItems: []
        }
    },
    methods: {
        saveItem: function(event) {
            event.preventDefault();
            if (this.todoItem != "") {
                this.newItems.push(this.todoItem);
                this.todoItem = '';
            };
        },
        removeItem: function(index) {
            this.newItems[index] = '';
            console.log(index);
        }
    }
}).mount('#app');


