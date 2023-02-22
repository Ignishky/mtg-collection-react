import { useEffect } from 'react'
import { AppDispatch } from '../../store/store'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { useAppDispatch } from '../../store/hooks'
import { Typography } from '@mui/joy'

export const Collection = () => {

  const dispatch: AppDispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: UPDATE_TITLE, data: { title: 'Collection' } })
  })

  return (
    <Typography level="h3">
      Collection
    </Typography>
  )
}
