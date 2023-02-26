import React, { useEffect, useState } from 'react'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import backend from '../port/CatalogueBackend'
import Set from '../model/Set'
import { SetDisplay } from '../component/SetDisplay'
import { Grid } from '@mui/joy'

export const Catalogue = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const [sets, setSets] = useState<Set[]>([])

  useEffect(() => {
    dispatch({ type: UPDATE_TITLE, data: { title: 'Sets' } })
    if (sets.length === 0) {
      const fetchData = async () => {
        const response = await backend.getSets()
        setSets(response.data.sets)
      }

      fetchData()
    }
  })

  return (
    <Grid container margin={1} spacing={2} sx={{ flexGrow: 1 }}>
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
