
new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        totalSlides: 0,
        sliderWidth: 0,
        isFirstSlide: 0,
        isLastSlide: 1,
        styleSliderPos: {
            transform: 'none'
        }
    },
    mounted: function() {
        this.sliderWidth = this.$refs.slide.clientWidth;
        this.totalSlides = this.$refs.slideContainer.childElementCount;
    },
    methods: {

        prev() {
            this.currentSlide -= 1;
            this.updateStyles();
            this.checkNumberOfSlide();
        },
    
        next() {
            this.currentSlide += 1;
            this.updateStyles();
            this.checkNumberOfSlide();
        },

        updateStyles() { 
            this.styleSliderPos = {
                // No template literal because of IE11 compatiblity
                transform: 'translateX(-' + this.currentSlide * this.sliderWidth + 'px)'
            }
        },

        checkNumberOfSlide: function() {
            if (this.currentSlide === (this.totalSlides -1)) {
                this.isLastSlide = 0;
            }
            if (this.currentSlide < (this.totalSlides -1)) {
                this.isLastSlide = 1;
            }
            if (this.currentSlide > 0) {
                this.isFirstSlide = 1;
            }
            if (this.currentSlide <= 0) {
                this.isFirstSlide = 0;
            }
        }
        
    }
});
