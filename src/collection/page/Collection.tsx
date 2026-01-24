import React, { useEffect, useState } from 'react'
import { Grid, LinearProgress, Typography } from '@mui/joy'
import { AppDispatch } from '../../store/store'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { useAppDispatch } from '../../store/hooks'
import { Card } from '../../setDetail/model/SetResponse'
import backend from '../port/CollectionBackend'
import CardDisplay from '../../setDetail/component/CardDisplay'
import collectionBackend from '../../setDetail/port/CollectionBackend'
import { useSortedCards } from '../../common/hook/useSortedCards'
import SortSelector from '../../common/component/SortSelector'

const Collection = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const [cards, setCards] = useState<Card[]>()
  const [loading, setLoading] = useState(false)
  const { sortedCards, sortBy, setSortBy } = useSortedCards(cards)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await backend.getCards()
        setCards(response.cards)
        dispatch({
          type: UPDATE_TITLE,
          data: { title: 'Collection', numberOfCards: response.size, price: response.value },
        })
      } catch (e: any) {
        if (e.name !== 'CanceledError' && e.name !== 'AbortError') {
          console.error('Failed to load set', e)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [dispatch])

  function removeCardFromCollection(card: Card, ownedFoil: boolean) {
    return async () => {
      await collectionBackend.removeCard(card.id, ownedFoil)
      const response = await backend.getCards()
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
              <SortSelector sortBy={sortBy || 'priceDesc'} setSortBy={setSortBy} />
            </Grid>
            {
              cards.length === 0 && (
                <Typography>No card in your collection</Typography>
              )
            }
            {
              sortedCards.map(card => {
                return (
                  <Grid key={card.id} xs={1}>
                    <CardDisplay card={card} addToCollection={() => {
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
