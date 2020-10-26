import { Component, h } from '@stencil/core';
import { bgImage, cardContent } from '../../utils/mock';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true
})
export class MyComponent {

  render() {
    return (
        <s-funbox-cards-wrapper cardContent={cardContent} bgImage={bgImage}></s-funbox-cards-wrapper>
    )
  }
}
