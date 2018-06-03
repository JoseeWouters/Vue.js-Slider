new Vue({
    el: 'slider',
    data: {
        currentNumber: 0,
        timer: null
    },
    methods: {
        prev: function() {
            if (event) event.preventDefault()
            this.currentNumber -= 1
            alert('this is ' + this.currentNumber)
        },
    
        next: function() {
            if (event) event.preventDefault()
            this.currentNumber += 1
            alert('this is ' + this.currentNumber)
        }
    }
})