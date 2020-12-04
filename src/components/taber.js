import { Component } from '../libs/component';

export class taber extends Component {
  static get selector() {
    return '#taber';
  }

  constructor(element) {
    super(element);
    this.tabs = this.element.querySelectorAll('.tab-header__item');
    this.parentsTabs = this.element.querySelector('.tab-header__items');
    this.tabsContent = this.element.querySelectorAll('.tab-content');
    this.showTabContent = this.showTabContent.bind(this);
    this.hideTabContent = this.hideTabContent.bind(this);
  }

  hideTabContent() {
    this.tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'anim-taber');
    });

    this.tabs.forEach((tab) => {
      tab.classList.remove('tab-header__item_active');
    });
  }

  showTabContent(i) {
    this.tabsContent[i].classList.add('show', 'anim-taber');
    this.tabsContent[i].classList.remove('hide');
    this.tabs[i].classList.add('tab-header__item_active');
  }

  taber() {
    this.hideTabContent();
    this.showTabContent(0);
    this.parentsTabs.addEventListener('click', function (event) {
      const target = event.target;
      const tabs = document.querySelectorAll('.tab-header__item');
      const tabsContent = document.querySelectorAll('.tab-content');

      if (target && target.classList.contains('tab-header__item')) {
        tabs.forEach((item, i) => {
          if (target == item) {
            tabsContent.forEach((item) => {
              item.classList.add('hide');
              item.classList.remove('show', 'anim-taber');
            });

            tabs.forEach((tab) => {
              tab.classList.remove('tab-header__item_active');
            });

            tabsContent[i].classList.add('show', 'anim-taber');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tab-header__item_active');
          }
        });
      }
    });
  }

  initialize() {
    this.taber();
  }
}
// this.tabs.forEach(function (item, i) {
//     if (target == item) {
//       this.hideTabContent();
//       this.showTabContent(i);
//     }
//   });
