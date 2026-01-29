import React from 'react'
import { Card as TcgCard, CardContent, CardCover, CardOverflow, Chip, IconButton } from '@mui/joy'
import { Card } from '../../common/model/SetResponse'

export function displayCardPrices(card: Card) {
  let nbNonFoil = card.nbOwnedNonFoil > 0 ? `(${card.nbOwnedNonFoil})` : ``
  let eurNonFoil = `${(card.prices.eur / 100).toFixed(2)} € ${nbNonFoil}`
  let nbFoil = card.nbOwnedFoil > 0 ? `(${card.nbOwnedFoil})` : ``
  let eurFoil = `${(card.prices.eurFoil / 100).toFixed(2)} € ${nbFoil} 🌟`
  return card.nonFoil ? card.foil ? `${eurNonFoil} / ${eurFoil}` : eurNonFoil : eurFoil
}

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
    return <IconButton size="sm" variant="soft" sx={{ alignSelf: 'end' }}
                       onClick={removeFromCollection(card, ownedFoil)}>
      - {ownedFoil ? '🌟' : ''}
    </IconButton>;
  }

  return (
    <TcgCard sx={{ height: 250, display: 'flex', flexDirection: 'column' }}>
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
      {(card.nbOwnedNonFoil > 0 || card.nbOwnedFoil > 0) && (
        <CardOverflow
          variant="solid"
          color={card.nbOwnedFoil > 0 ? "success" : "warning"}
          sx={{
            textAlign: 'center',
            fontSize: 'xs',
            fontWeight: 'xl',
            textTransform: 'uppercase',
          }}
        >
          {card.nbOwnedFoil > 0 ? "Owned foil" : "Owned"}
        </CardOverflow>
      )}
    </TcgCard>
  )
}

export default CardDisplay
