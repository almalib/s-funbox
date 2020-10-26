import { newE2EPage } from '@stencil/core/testing';

describe('s-funbox-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-funbox-cards></s-funbox-cards>');

    const element = await page.find('s-funbox-cards');
    expect(element).toHaveClass('hydrated');
  });
});
