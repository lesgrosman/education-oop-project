export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = this.oldItems.length;
        this.newCounter = this.newItems.length;
    }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            items[counter - 2].style.display = 'flex';
            counter--;
            if (counter === 1) {
                items[items.length - 1].remove();
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length -1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);

    }

}