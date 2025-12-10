import {Card, Prices} from '../setDetail/model/SetResponse';

export function displayCardPrices(card: Card) {
  let nbNonFoil = card.nbOwnedNonFoil >0 ? `(${card.nbOwnedNonFoil})` : ``
  let eurNonFoil = `${(card.prices.eur / 100).toFixed(2)} € ${nbNonFoil}`
  let nbFoil = card.nbOwnedFoil >0 ? `(${card.nbOwnedFoil})` : ``
  let eurFoil = `${(card.prices.eurFoil / 100).toFixed(2)} € ${nbFoil} 🌟`
  return card.nonFoil ? card.foil ? `${eurNonFoil} / ${eurFoil}` : eurNonFoil : eurFoil
}

export function displayPrices(prices: Prices) {
  let eurNonFoil = `${(prices.eur / 100).toFixed(2)} €`
  let eurFoil = `${(prices.eurFoil / 100).toFixed(2)} € 🌟`
  return `${eurNonFoil} / ${eurFoil}`
}
