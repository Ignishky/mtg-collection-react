export interface SetResponse {
  name: string,
  cards: Card[],
  prices: Prices,
}

export interface Prices {
  eur: number,
  eurFoil: number,
}

export interface Card {
  id: string,
  name: string,
  image: string,
  prices: Prices,
  foil: boolean,
  nonFoil: boolean,
  nbOwnedNonFoil: number,
  nbOwnedFoil: number,
}
