export interface SetResponse {
  data: SetData,
}

export interface SetData {
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
  owned: boolean,
  ownedFoil: boolean,
}
