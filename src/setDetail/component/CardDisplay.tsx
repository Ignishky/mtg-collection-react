import React from 'react'
import {Card as Toto, CardContent, CardCover, Chip} from '@mui/joy'
import {Card} from '../model/SetResponse'

interface Props {
  card: Card
}

const CardDisplay = ({ card }: Props) => {
  return (
    <Toto sx={{ height: 250 }}>
      <CardCover>
        <img src={card.image} loading="lazy" alt={card.name} height={260} />
      </CardCover>
      <CardContent sx={{ justifyContent: 'flex-end', alignSelf:'center', textAlign: 'center', width: '65%' }}>
        <Chip size='sm' variant='soft' color='warning'>
          {card.prices.eur / 100} € / {card.prices.eurFoil / 100} €
        </Chip>
      </CardContent>
    </Toto>
  )
}

export default CardDisplay
