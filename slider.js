
new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        totalSlides: 0,
        sliderWidth: 0,
        styleSliderPos: {
            transform: 'none'
        }
    },
    mounted: function() { // No shorthand because of IE11 compatibility
        this.sliderWidth = this.$refs.slide.clientWidth;
        this.totalSlides = this.$refs.slideContainer.childElementCount;
    },
    methods: {

        prev: function() {
            this.currentSlide -= 1;
            if (this.currentSlide < 0) {
                this.currentSlide = this.totalSlides - 1;
            }
            this.updateStyles();
        },
    
        next: function() {
            this.currentSlide += 1;
            if (this.currentSlide > (this.totalSlides - 1)) {
                this.currentSlide = 0;
            }
            this.updateStyles();
        },

        updateStyles: function() { 
            this.styleSliderPos = {
                // No template literal because of IE11 compatiblity
                transform: 'translateX(-' + this.currentSlide * this.sliderWidth + 'px)'
            }
        },
        
    }
});
