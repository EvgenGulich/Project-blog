import { Component } from '../libs/component';

export class addClassActive extends Component {
  static get selector() {
    return '#btn-active';
  }
  constructor(element) {
    super(element);
    this.addClassActive = this.addClassActive.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.addMenuText = this.addMenuText.bind(this);
    this.nav = document.querySelector('.navigation');
  }

  addMenuText(text) {
    this.newElement = document.createElement('p');
    this.newElement.textContent = text;
    this.newElement.classList.add('header__nav-dis');
    this.element.append(this.newElement);
  }
  addClassActive() {
    this.element.classList.toggle('active');
  }
  openNav() {
    this.nav.classList.remove('animation-menu-close');
    this.nav.classList.add('animation-menu-open');
  }
  closeNav() {
    this.nav.classList.add('animation-menu-close');
    this.nav.classList.remove('animation-menu-open');
  }
  initialize() {
    this.addMenuText('MENU');
    this.element.addEventListener('click', () => {
      if (this.element.classList.contains('active')) {
        this.newElement.remove();
        this.addMenuText('MENU');
        this.closeNav();
      } else {
        this.newElement.remove();
        this.addMenuText('CLOSE');
        this.openNav();
      }
    });
    this.element.addEventListener('click', this.addClassActive);
  }
}
