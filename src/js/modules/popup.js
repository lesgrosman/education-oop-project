export default class PopupBlock {
    constructor(page, block, btn) {
        this.page = document.querySelector(page);
        this.block = document.querySelector(block);
        this.btns = document.querySelectorAll(btn);
    }

    showBlock() {
        if (this.page.style.display === 'block') {
            setTimeout(() => {
                this.block.style.display = 'block';
            }, 2000);
        }
    }

    render() {
        this.block.style.display = 'none';
        this.block.classList.add('animated', 'fadeInUp');

        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.showBlock();
            });
        });
    }
}