import React from 'react'
import { Grid, LinearProgress } from '@mui/joy'
import { useParams } from 'react-router-dom'
import CardDisplay from '../component/CardDisplay'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import { useSortedCards } from '../../common/hook/useSortedCards'
import SortSelector from '../../common/component/SortSelector'
import { useGetSetByCodeQuery } from '../../common/port/backend';

const SetDetail = () => {

  const { setCode } = useParams()

  const dispatch: AppDispatch = useAppDispatch()
  const { data, isLoading } = useGetSetByCodeQuery(setCode!!)

  dispatch({
    type: UPDATE_TITLE,
    data: {
      title: data?.name,
      numberOfCards: data?.cards.length,
      price: data?.price,
    },
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
              <SortSelector sortBy={sortBy || 'number'} setSortBy={setSortBy} />
            </Grid>
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

export default SetDetail
