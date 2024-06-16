import {Card} from '../../setDetail/model/SetResponse';

export interface CollectionResponse {
  data: CollectionData,
}

export interface Prices {
  eur: number,
}

export interface CollectionData {
  prices: Prices,
  cards: Card[],
}
