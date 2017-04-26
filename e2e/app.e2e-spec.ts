import { Angular4CompleteAppPage } from './app.po';

describe('angular4-complete-app App', () => {
  let page: Angular4CompleteAppPage;

  beforeEach(() => {
    page = new Angular4CompleteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
