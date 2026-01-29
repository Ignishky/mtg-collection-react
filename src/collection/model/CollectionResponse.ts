import { Card } from '../../common/model/SetResponse';

export interface CollectionResponse {
  cards: Card[],
  size: number,
  value: number,
}
