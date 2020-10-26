import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { markdown } from 'markdown';

@Component({
  tag: 's-funbox-cards',
  styleUrl: 's-funbox-cards.css',
  shadow: false,
  scoped: true,
})
export class SFunboxCards {
  /**
   * Данные для карточки
   */
  @Prop() cardContent: any;

  /**
   * Клик по карточке
   */
  @Event() clickOnCard: EventEmitter;

  /**
   * Стейт для переключения класса
   */
  @State() toggleClassState = false;

  /**
   *
   */
  public cardWrapperTag: HTMLElement;

  render() {
    return (
      <div class={this.cardContent.inStock ? 'enabled' : 'disabled'} ref={el => (this.cardWrapperTag = el)}>
        <div class="card" onMouseLeave={() => this.addClassForHoverEffect()} onClick={() => this.selectCard(this.cardContent.id)}>
          <div class="card-text">
            <h3 class="desc">{this.cardContent.desc}</h3>
            <h3 class="question">{this.cardContent.question}</h3>
            <h1 class="card-title">{this.cardContent.title}</h1>
            <h2 class="menu">{this.cardContent.menu}</h2>
            <div class="amount" innerHTML={markdown.toHTML(this.cardContent.amount)}/>
            <div class="stock" innerHTML={markdown.toHTML(this.cardContent.stock)}/>
          </div>
          <div class="card-img" style={{ backgroundImage: `url(${this.cardContent.img})` }}/>
          <div class="weight-wrapper">
            <span class="amt">{this.cardContent.weight}</span>
            <span class="weight">{this.cardContent.kg}</span>
          </div>
        </div>
        <div class="info">
          {this.toggleClassState ? (
            <div>{this.cardContent.selectedInfo}</div>
          ) : (
            <div>
              {this.cardContent.info} <a onClick={() => this.selectCard(this.cardContent.id)}>{this.cardContent.link}</a>
            </div>
          )}
        </div>
        <div class="not-available">
          {this.cardContent.disabledInfo}
        </div>
      </div>
    );
  }

  /**
   * Переключает стейт и вызывает функцию для добавления класса
   * @param id
   */
  public selectCard(id) {
    this.toggleClassState = !this.toggleClassState;
    this.addRemoveClass(id);
  }

  /**
   * Добавляет и удаляет класс selected
   * @param id
   */
  public addRemoveClass(id) {
    if (id === this.cardContent.id && this.toggleClassState) {
      this.cardWrapperTag.classList.add('selected');
    } else {
      this.cardWrapperTag.classList.remove('selected');
    }
    this.cardWrapperTag.addEventListener('mouseleave', () => {
      this.cardWrapperTag.classList.add('selected-card')
    })
  }

  /**
   * Состояние наведения применяется к выбранной упаковке не сразу, а после
   того, как курсор ушел с нее после первоначального выбора.
   */
  public addClassForHoverEffect() {
      this.cardWrapperTag.classList.add('selected-hover');
  }
}
