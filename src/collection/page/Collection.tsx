import React, {useEffect, useState} from 'react'
import {Grid, LinearProgress, Typography} from '@mui/joy'
import {AppDispatch} from '../../store/store'
import {UPDATE_TITLE} from '../../store/app/action.const'
import {useAppDispatch} from '../../store/hooks'
import {Card} from '../../setDetail/model/SetResponse';
import backend from '../port/CollectionBackend'
import CardDisplay from '../../setDetail/component/CardDisplay';
import collectionBackend from '../../setDetail/port/CollectionBackend';

const Collection = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const [cards, setCards] = useState<Card[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!cards) {
      const fetchData= async () => {
        const response = await backend.getCards()
        dispatch({ type: UPDATE_TITLE, data: { title: 'Collection', numberOfCards: response.data.cards.length, prices: response.data.prices } })
        setCards(response.data.cards)
        setLoading(false)
      }

      fetchData();
    }
  })

  function removeCardFromCollection(card: Card, ownedFoil: boolean) {
    return async () => {
      await collectionBackend.removeCard(card.id, ownedFoil)
      const response = await backend.getCards()
      setCards(response.data.cards)
    }
  }

  return (
    <>
      {
        loading && (<LinearProgress />)
      }
      {
        cards && (
          <Grid container margin={1} columns={9}>
            {
              cards.length === 0 && (
                <Typography>No card in your collection</Typography>
              )
            }
            {
              cards.map(card => {
                return (
                  <Grid key={card.id} xs={1}>
                    <CardDisplay card={card} addToCollection={(card: Card, ownedFoil: boolean) => {
                    }} removeFromCollection={removeCardFromCollection} />
                  </Grid>
                )
              })
            }
          </Grid>
        )
      }
    </>
  )
}

export default Collection
