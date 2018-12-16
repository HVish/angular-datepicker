import { browser, by, ElementFinder, element } from 'protractor';

describe('adp-date-picker:universal', () => {
  let select: ElementFinder;

  beforeEach(() => {
    browser.driver.get(browser.baseUrl + '/');
    select = element(by.tagName('adp-date-picker'));
  });

  it('should be rendered', () => {
    expect(select).toBeDefined();
  });
});
