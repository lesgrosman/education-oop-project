export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }
    render() {
        try {
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.closest('.module__info-show').nextElementSibling;
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