import React from 'react'
import { Grid, LinearProgress } from '@mui/joy'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import { Set } from '../../common/model/SetsResponse'
import SetDisplay from '../component/SetDisplay'
import { useGetAllSetsQuery } from '../../common/port/backend';

const Catalogue = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const { data, isLoading } = useGetAllSetsQuery(undefined)

  dispatch({ type: UPDATE_TITLE, data: { title: 'Sets' } })

  return (
    <>
      {
        isLoading && (<LinearProgress />)
      }
      {
        data && (
          <Grid container margin={1} spacing={1}>
            {
              data.sets.map((set: Set) => {
                return (
                  <Grid key={set.code} xs={2}>
                    <SetDisplay key={set.code} set={set} />
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

export default Catalogue
