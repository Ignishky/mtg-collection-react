import React from 'react'
import {Card as TcgCard, CardContent, CardCover, Chip} from '@mui/joy'
import {Card} from '../model/SetResponse'
import {displayCardPrices} from '../../common/PricesUtils';

interface Props {
  card: Card
}

const CardDisplay = ({ card }: Props) => {
  return (
    <TcgCard sx={{ height: 250 }}>
      <CardCover>
        <img src={card.image} loading="lazy" alt={card.name} height={260} />
      </CardCover>
      <CardContent sx={{ justifyContent: 'flex-end', alignSelf: 'center', textAlign: 'center', width: '70%' }}>
        <Chip size="sm" variant="soft" color="neutral" sx={{ alignSelf: 'center' }}>
          {displayCardPrices(card)}
        </Chip>
      </CardContent>
    </TcgCard>
  )
}

export default CardDisplay
