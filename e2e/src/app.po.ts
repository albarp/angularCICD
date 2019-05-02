import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getFirstLink() {
    return element(by.xpath('//ul/li/h2/a'));
  }

  getUserNameTextBox() {
    return element(by.id('name'));
  }
}
