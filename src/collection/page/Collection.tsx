import React, {useEffect, useState} from 'react'
import {Grid, LinearProgress} from '@mui/joy'
import {AppDispatch} from '../../store/store'
import {UPDATE_TITLE} from '../../store/app/action.const'
import {useAppDispatch} from '../../store/hooks'
import {Card} from '../../setDetail/model/SetResponse';
import backend from '../port/CollectionBackend'
import CardDisplay from '../../setDetail/component/CardDisplay';
import collectionBackend from '../../setDetail/port/CollectionBackend';

const Collection = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)

  async function getData() {
    const response = await backend.getCards()
    setCards(response.data.cards)
    setLoading(false)
  }

  useEffect(() => {
    dispatch({ type: UPDATE_TITLE, data: { title: 'Collection' } })
    getData();
  })

  function removeCardFromCollection(card: Card) {
    return async () => {
      await collectionBackend.removeCard(card.id)
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
