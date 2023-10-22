import {Card, Prices} from '../setDetail/model/SetResponse';

export function displayCardPrices(card: Card) {
  return displayPrices(card.prices, card.nonFoil, card.foil)
}

export function displayPrices(prices: Prices, isNonFoil: boolean = true, isFoil: boolean = true) {
  let eur = `${(prices.eur / 100).toFixed(2)} €`
  let eurFoil = `${(prices.eurFoil / 100).toFixed(2)} € 🌟`
  return isNonFoil ? isFoil ? `${eur} / ${eurFoil}` : eur : eurFoil
}
