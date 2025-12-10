import React from 'react'
import {Card as TcgCard, CardContent, CardCover, Chip, IconButton} from '@mui/joy'
import {Card} from '../model/SetResponse'
import {displayCardPrices} from '../../common/PricesUtils';

interface Props {
  card: Card,
  addToCollection: Function,
  removeFromCollection: Function,
}

const CardDisplay = ({ card, addToCollection, removeFromCollection }: Props) => {

  function addCollectionButton(ownedFoil: boolean) {
    return <IconButton size="sm" variant="soft" sx={{ alignSelf: 'end' }} onClick={addToCollection(card, ownedFoil)}>
      + {ownedFoil ? '🌟' : ''}
    </IconButton>;
  }

  function removeCollectionButton(ownedFoil: boolean) {
    return <IconButton size="sm" variant="soft" sx={{ alignSelf: 'end' }} onClick={removeFromCollection(card, ownedFoil)}>
      - {ownedFoil ? '🌟' : ''}
    </IconButton>;
  }

  return (
    <TcgCard sx={{ height: 250 }}>
      <CardCover>
        <img src={card.image} loading="lazy" alt={card.name} />
      </CardCover>
      <CardContent sx={{ justifyContent: 'flex-end', alignSelf: 'center', textAlign: 'center', width: '100%' }}>
        {
          card.nonFoil && addCollectionButton(false)
        }
        {
          card.foil && addCollectionButton(true)
        }
        {
          card.nbOwnedNonFoil > 0 && removeCollectionButton(false)
        }
        {
          card.nbOwnedFoil > 0 && removeCollectionButton(true)
        }
        <Chip size="sm" variant="soft" color="neutral" sx={{ alignSelf: 'center' }}>
          {displayCardPrices(card)}
        </Chip>
      </CardContent>
    </TcgCard>
  )
}

export default CardDisplay
