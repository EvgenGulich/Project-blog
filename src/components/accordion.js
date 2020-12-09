import { Component } from '../libs/component';

export class Accordion extends Component {
  static get selector() {
    return '#accor';
  }
  constructor(element) {
    super(element);
    this.$target = document.querySelectorAll('.categories__item-caption');
    this.$item = document.querySelectorAll('.categories__item');
    this.addOpenClass = this.addOpenClass.bind(this);
    this.removeOpenClass = this.removeOpenClass.bind(this);
  }
  removeOpenClass() {
    this.$item.forEach((e) => {
      e.classList.remove('open');
    });
  }
  addOpenClass(e) {
    if (this.$item[e].classList.contains('open')) {
      this.removeOpenClass();
    } else {
      this.removeOpenClass();
      this.$item[e].classList.add('open');
    }
  }
  accardion() {
    this.$target.forEach((elem, i) => {
      elem.addEventListener('click', () => {
        this.addOpenClass(i);
      });
    });
  }

  initialize() {
    this.accardion();
  }
}
