import { AdminToolPage } from './app.po';

describe('admin-tool App', function() {
  let page: AdminToolPage;

  beforeEach(() => {
    page = new AdminToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
