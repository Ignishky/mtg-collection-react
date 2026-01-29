import React, { useEffect, useState } from 'react'
import { Grid, LinearProgress } from '@mui/joy'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import backend from '../port/CatalogueBackend'
import { Set } from '../../common/model/SetsResponse'
import SetDisplay from '../component/SetDisplay'

const Catalogue = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const [sets, setSets] = useState<Set[]>()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: UPDATE_TITLE, data: { title: 'Sets' } })
    if (!sets) {
      const fetchData = async () => {
        const response = await backend.getSets()
        setSets(response.sets)
        setLoading(false)
      }

      fetchData()
    }
  })

  return (
    <>
      {
        loading && (<LinearProgress />)
      }
      {
        sets && (
          <Grid container margin={1} spacing={1}>
            {
              sets.map(set => {
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
