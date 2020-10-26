import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 's-funbox-cards-wrapper',
  styleUrl: 's-funbox-cards-wrapper.css',
  shadow: false,
  scoped: true,
})
export class SFunboxCardsWrapper {
  /**
   * Background image
   */
  @Prop() bgImage: string;

  /**
   * Данные для карточки
   */
  @Prop() cardContent: any;

  render() {
    return (
      <main style={{ backgroundImage: `url(${this.bgImage})` }}>
        <div class="container">
          <h1>Ты сегодня покормил кота?</h1>
          <div class="card-container">
            {this.cardContent.map(item => {
              return (
                <div class="card-wrapper">
                  <s-funbox-cards cardContent={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}
