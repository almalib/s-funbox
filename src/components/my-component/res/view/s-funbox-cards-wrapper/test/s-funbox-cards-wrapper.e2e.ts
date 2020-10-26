import { newE2EPage } from '@stencil/core/testing';

describe('s-funbox-cards-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-funbox-cards-wrapper></s-funbox-cards-wrapper>');

    const element = await page.find('s-funbox-cards-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
