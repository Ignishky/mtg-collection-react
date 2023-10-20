import React from 'react'
import {Card as TcgCard, CardContent, CardCover, Chip} from '@mui/joy'
import {Card} from '../model/SetResponse'

interface Props {
  card: Card
}

function getPrices(card: Card) {
  let eur = `${(card.prices.eur / 100).toFixed(2)} €`
  let eurFoil = `${(card.prices.eurFoil / 100).toFixed(2)} € 🌟`
  if (!card.nonFoil) return eurFoil
  if (!card.foil) return eur
  return `${eur} / ${eurFoil}`
}

const CardDisplay = ({ card }: Props) => {
  return (
    <TcgCard sx={{ height: 250 }}>
      <CardCover>
        <img src={card.image} loading="lazy" alt={card.name} height={260} />
      </CardCover>
      <CardContent sx={{ justifyContent: 'flex-end', alignSelf: 'center', textAlign: 'center', width: '70%' }}>
        <Chip size="sm" variant="soft" color="neutral">
          {getPrices(card)}
        </Chip>
      </CardContent>
    </TcgCard>
  )
}

export default CardDisplay
