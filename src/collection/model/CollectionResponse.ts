import {Card} from '../../setDetail/model/SetResponse';

export interface CollectionResponse {
  prices: Prices,
  cards: Card[],
}

export interface Prices {
  eur: number,
}
