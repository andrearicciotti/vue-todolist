const { createApp } = Vue;

createApp({
    data() {
        return {
            todoItem: {
                name: '',
                status: false
            },
            newItems: [],
            highlight: 'highlight'
        }
    },
    methods: {
        saveItem: function(event) {
            event.preventDefault();
            if (this.todoItem.name != '') {
                this.newItems.push({...this.todoItem});
                this.todoItem.name = '';
                console.log(this.newItems);
            };
        },
        removeItem: function(index) {
            (this.newItems[index].status === true) ? this.newItems[index].status = false : this.newItems[index].name = '';
            // console.log(index);
        },
        highlightItem: function(index) {
            (this.newItems[index].status === false) ? this.newItems[index].status = true : this.newItems[index].status = false;
        }
    }
}).mount('#app');


