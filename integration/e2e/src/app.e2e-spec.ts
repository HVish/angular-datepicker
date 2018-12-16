
import { browser, by, element, ElementFinder } from 'protractor';

describe('adp-date-picker', () => {
  let select: ElementFinder;

  beforeEach(() => {
    browser.get('/');
    select = element(by.tagName('adp-date-picker'));
  });

  it('should be rendered', () => {
    expect(select).toBeDefined();
  });
});
