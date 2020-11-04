import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(container, btns) {
        super(container, btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        } else if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('fadeInUp');
                }, 3000);
            }
        } catch(e) {}

        this.slides.forEach(item => {
            item.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlide(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlide(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlide(-1);
            });
        });
        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlide(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        } 
        
    }
}