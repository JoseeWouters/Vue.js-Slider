
new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        totalSlides: 0,
        styleSliderPos: {
            transform: 'none'
        }
    },
    methods: {

        prev() {
            this.currentSlide -= 1;
            this.updateStyles();
        },
    
        next() {
            this.currentSlide += 1;
            this.updateStyles();
        },

        updateStyles() { 
            this.styleSliderPos = {
                // No template literal because of IE11 compatiblity
                transform: 'translateX(-' + this.currentSlide * 800 + 'px)'
            }
        }
    }
});
