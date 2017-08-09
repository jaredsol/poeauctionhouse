import { PoeauctionhousePage } from './app.po';

describe('poeauctionhouse App', () => {
  let page: PoeauctionhousePage;

  beforeEach(() => {
    page = new PoeauctionhousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
