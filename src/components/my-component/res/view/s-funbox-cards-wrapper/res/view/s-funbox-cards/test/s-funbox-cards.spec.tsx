import { newSpecPage } from '@stencil/core/testing';
import { SFunboxCards } from '../s-funbox-cards';

describe('s-funbox-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SFunboxCards],
      html: `<s-funbox-cards></s-funbox-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <s-funbox-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-funbox-cards>
    `);
  });
});
