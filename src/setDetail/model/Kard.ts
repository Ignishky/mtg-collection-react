interface Prices {
  eur: number,
  eurFoil: number
}

interface Kard {
  id: string,
  name: string,
  image: string,
  prices: Prices
}

export default Kard
