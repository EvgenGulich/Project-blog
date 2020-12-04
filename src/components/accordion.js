import { Component } from '../libs/component';

export class accordionCategories extends Component {
  static get selector() {
    return '#accor';
  }
  constructor(element) {
    super(element);
    this.item = document.querySelectorAll('.categories__item');
    this.addOpenClass = this.addOpenClass.bind(this);
    this.removeOpenClass = this.removeOpenClass.bind(this);
  }
  removeOpenClass() {
    this.item.forEach((e) => {
      e.classList.remove('open');
    });
  }
  addOpenClass(e) {
    if (e.classList.contains('open')) {
      this.removeOpenClass();
    } else {
      this.removeOpenClass();
      e.classList.add('open');
    }
  }
  accardion() {
    this.item.forEach((e) => {
      e.addEventListener('click', () => {
        this.addOpenClass(e);
      });
    });
  }

  initialize() {
    this.accardion();
  }
}
