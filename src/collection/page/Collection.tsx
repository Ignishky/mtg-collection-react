import React from 'react'
import { Grid, LinearProgress, Typography } from '@mui/joy'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { useAppDispatch } from '../../store/hooks'
import CardDisplay from '../../setDetail/component/CardDisplay'
import { useSortedCards } from '../../common/hook/useSortedCards'
import SortSelector from '../../common/component/SortSelector'
import { useGetCollectionQuery } from '../../common/port/backend';

const Collection = () => {

  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetCollectionQuery(undefined)

  dispatch({
    type: UPDATE_TITLE,
    data: { title: 'Collection', numberOfCards: data?.size, price: data?.value },
  })

  const { sortedCards, sortBy, setSortBy } = useSortedCards(data?.cards)

  return (
    <>
      {
        isLoading && (<LinearProgress />)
      }
      {
        sortedCards && (
          <Grid container margin={1} columns={9}>
            <Grid xs={9} sx={{ mb: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <SortSelector sortBy={sortBy || 'priceDesc'} setSortBy={setSortBy} />
            </Grid>
            {
              sortedCards.length === 0 && (
                <Typography>No card in your collection</Typography>
              )
            }
            {
              sortedCards.map(card => {
                return (
                  <Grid key={card.id} xs={1}>
                    <CardDisplay card={card} />
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
