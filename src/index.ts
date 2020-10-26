export { Components, JSX } from './components';

export interface FunboxCardContentInterface {
  id: number;
  desc: string;
  question: string;
  title: string;
  menu: string;
  amount: string;
  stock: string;
  review?: string;
  weight: string;
  kg: string;
  info: string;
  disabledInfo: string;
  img: string;
  inStock: boolean;
  selectedInfo: string;
  link?: string;
}
