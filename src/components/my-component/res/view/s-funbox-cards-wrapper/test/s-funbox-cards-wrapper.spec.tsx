import { newSpecPage } from '@stencil/core/testing';
import { SFunboxCardsWrapper } from '../s-funbox-cards-wrapper';

describe('s-funbox-cards-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SFunboxCardsWrapper],
      html: `<s-funbox-cards-wrapper></s-funbox-cards-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <s-funbox-cards-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-funbox-cards-wrapper>
    `);
  });
});
