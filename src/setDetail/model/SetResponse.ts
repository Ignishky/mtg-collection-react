export interface SetResponse {
  data: SetData
}

export interface SetData {
  cards: Card[]
}

interface Prices {
  eur: number,
  eurFoil: number
}

export interface Card {
  id: string,
  name: string,
  image: string,
  prices: Prices,
  foil: boolean,
  nonFoil: boolean,
}
