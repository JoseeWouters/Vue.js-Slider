
new Vue({
    el: '#slider',
    data: {
        currentNumber: 0,
        timer: null
    },
    methods: {

        prev() {
            this.currentNumber -= 1;
        },
    
        next() {
            this.currentNumber += 1;
        }
    }
});
