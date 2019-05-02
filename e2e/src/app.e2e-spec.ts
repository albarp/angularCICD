import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // expect(page.getTitleText()).toEqual('Welcome to dev Modified 2!');
  });

  // it('should follow first link', () => {
  //   const x = page.getFirstLink().click();

  //   browser.pause();
  // });

  it('shold fill username', () => {
    page.getUserNameTextBox().sendKeys('pippo');

    browser.sleep(10000).then(function() {
      console.log('waited 10 seconds');
    });
  });
});
