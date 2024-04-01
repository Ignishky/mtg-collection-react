import React, {useEffect, useState} from 'react'
import {Grid, LinearProgress} from '@mui/joy'
import {useParams} from 'react-router-dom'
import {Card} from '../model/SetResponse'
import backend from '../port/SetBackend'
import collectionBackend from '../port/CollectionBackend'
import CardDisplay from '../component/CardDisplay'
import {UPDATE_TITLE} from '../../store/app/action.const';
import {AppDispatch} from '../../store/store';
import {useAppDispatch} from '../../store/hooks';

const SetDetail = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const { setCode } = useParams()
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (setCode && cards.length === 0) {
      const fetchData = async () => {
        const response = await backend.getSet(setCode)
        setCards(response.data.cards)
        dispatch({ type: UPDATE_TITLE, data: { title: response.data.name, numberOfCards: response.data.cards.length, prices: response.data.prices } })
        setLoading(false)
      }

      fetchData()
    }
  })

  function addCardToCollection(card: Card, ownedFoil: boolean) {
    return async () => {
      await collectionBackend.addCard(card.id, ownedFoil)
      let response = await backend.getSet(setCode!!);
      setCards(response.data.cards)
    }
  }

  function removeCardFromCollection(card: Card) {
    return async () => {
      await collectionBackend.removeCard(card.id)
      let response = await backend.getSet(setCode!!);
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
                    <CardDisplay card={card} addToCollection={addCardToCollection} removeFromCollection={removeCardFromCollection} />
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

export default SetDetail
