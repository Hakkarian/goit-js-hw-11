export default class LoadMoreBtn {
    constructor({ selector, hidden = false}) {
        this.refs = this.getRefs(); 

    }
    getRefs(selector) {
        const refs = {};
        let { button, label, spinner } = refs;
        button = document.querySelector('button');
        label = document.querySelector('.label');
        spinner = document.querySelector('.spinner');
        return refs;
    }
    enable() {
        this.button.disabled = false;
        this.label.textContent = 'Find more';
        this.spinner.classList.add('is-hidden');
    }
    disable() {
        this.button.disabled = true;
        this.label.textContent = 'Find more';
        this.spinner.classList.remove('is-hidden');
    }

}