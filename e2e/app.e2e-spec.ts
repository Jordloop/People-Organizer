import { PeopleOrganizerPage } from './app.po';

describe('people-organizer App', () => {
  let page: PeopleOrganizerPage;

  beforeEach(() => {
    page = new PeopleOrganizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
