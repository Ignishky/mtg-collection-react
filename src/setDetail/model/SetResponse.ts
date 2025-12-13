export interface SetResponse {
  name: string,
  cards: Card[],
  price: number
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

export interface Prices {
  eur: number,
  eurFoil: number,
}
