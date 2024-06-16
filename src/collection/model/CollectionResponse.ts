import {Card} from '../../setDetail/model/SetResponse';

export interface CollectionResponse {
  data: CollectionData,
}

export interface CollectionData {
  cards: Card[],
}
