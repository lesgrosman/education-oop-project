export default class ShowInfo {
    constructor(btns) {
        this.triggers = document.querySelectorAll(btns);
    }
    render() {
        try {
            this.triggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const content = trigger.closest('.module__info-show').nextElementSibling;
                    if (content.style.display !== 'block') {
                        content.classList.remove('fadeInUp');
                        content.classList.add('animated', 'fadeInDown');
                        content.style.display = 'block';
                    } else if (content.style.display === 'block'){
                        content.classList.remove('fadeInDown');
                        content.style.display = 'none';                       
                    }
                });
            });
        } catch(e) {}
    }
}