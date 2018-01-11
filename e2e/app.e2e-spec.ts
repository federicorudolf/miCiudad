import { MiCiudadPage } from './app.po';

describe('mi-ciudad App', () => {
  let page: MiCiudadPage;

  beforeEach(() => {
    page = new MiCiudadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
