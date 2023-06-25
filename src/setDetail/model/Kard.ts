interface Prices {
  eur: number,
  eurFoil: number
}

interface Kard {
  name: string,
  image: string,
  prices: Prices
}

export default Kard
