import React, { useEffect, useState } from 'react'
import { Grid, LinearProgress } from '@mui/joy'
import { useParams } from 'react-router-dom'
import { Card } from '../../common/model/SetResponse'
import backend from '../port/SetBackend'
import collectionBackend from '../port/CollectionBackend'
import CardDisplay from '../component/CardDisplay'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import { useSortedCards } from '../../common/hook/useSortedCards'
import SortSelector from '../../common/component/SortSelector'

const SetDetail = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const { setCode } = useParams()
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(false)
  const { sortedCards, sortBy, setSortBy } = useSortedCards(cards)

  useEffect(() => {
    if (!setCode) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await backend.getSet(setCode)
        setCards(response.cards)
        dispatch({
          type: UPDATE_TITLE,
          data: {
            title: response.name,
            numberOfCards: response.cards.length,
            price: response.price,
          },
        })
      } catch (e: any) {
        if (e.name !== 'CanceledError' && e.name !== 'AbortError') {
          console.error('Failed to load set', e)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [setCode, dispatch])

  function addCardToCollection(card: Card, ownedFoil: boolean) {
    return async () => {
      await collectionBackend.addCard(card.id, ownedFoil)
      let response = await backend.getSet(setCode!!);
      setCards(response.cards)
    }
  }

  function removeCardFromCollection(card: Card, ownedFoil: boolean) {
    return async () => {
      await collectionBackend.removeCard(card.id, ownedFoil)
      let response = await backend.getSet(setCode!!);
      setCards(response.cards)
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
            <Grid xs={9} sx={{ mb: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <SortSelector sortBy={sortBy || 'number'} setSortBy={setSortBy} />
            </Grid>
            {
              sortedCards.map(card => {
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
