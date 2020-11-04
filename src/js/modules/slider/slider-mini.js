import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    moveBtnsToEnd() {
        this.slides.forEach(slide => {
            if (slide.tagName === 'BUTTON') {
                this.container.appendChild(slide);
            }
        });
    }



    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0.4';
            }
        });

        this.slides[0].classList.add(this.activeClass);

        // activeCalss for slide with index = 0 
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.appendChild(this.slides[0]); // When click 'next' move first slide in the end of container
            this.decorizeSlides();
            this.moveBtnsToEnd();
        });

        this.prev.addEventListener('click', () => {
            let active = this.slides[0]; // last slide
            this.container.insertBefore(active, this.slides[this.slides.length - 1]); // // When click 'prev' move last slide in the beginning of container
            this.decorizeSlides();
            this.moveBtnsToEnd();
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items:flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides(); // 1st slide is active at the beginning by default after page refresh

        if (this.autoplay) {
            setInterval(() => {
                this.container.appendChild(this.slides[0]); // When click 'next' move first slide in the end of container
                this.decorizeSlides();
            }, 5000);
        }
        } catch (e) {}
    }

}