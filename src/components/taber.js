import { Component } from '../libs/component';

export class taber extends Component {
  static get selector() {
    return '#taber';
  }

  constructor(element) {
    super(element);
    this.tabs = this.element.querySelectorAll('[data-item]');
    this.parentsTabs = this.element.querySelector('[data-items]');
    this.tabsContent = this.element.querySelectorAll('[data-content]');
    this.showTabContent = this.showTabContent.bind(this);
    this.hideTabContent = this.hideTabContent.bind(this);
  }

  hideTabContent() {
    this.tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'anim-taber');
    });

    this.tabs.forEach((tab) => {
      tab.classList.remove('item-active');
    });
  }

  showTabContent(i) {
    this.tabsContent[i].classList.add('show', 'anim-taber');
    this.tabsContent[i].classList.remove('hide');
    this.tabs[i].classList.add('item-active');
  }

  taber() {
    this.hideTabContent();
    this.showTabContent(0);
    this.parentsTabs.addEventListener('click', (event) => {
      const target = event.target.closest('[data-item]');

      if (target && target.hasAttribute('data-item')) {
        this.tabs.forEach((item, i) => {
          if (target == item) {
            this.hideTabContent();
            this.showTabContent(i);
          }
        });
      }
    });
  }

  initialize() {
    this.taber();
  }
}
