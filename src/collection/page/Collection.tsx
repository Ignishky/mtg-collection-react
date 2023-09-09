import {useEffect} from 'react'
import {Typography} from '@mui/joy'
import {AppDispatch} from '../../store/store'
import {UPDATE_TITLE} from '../../store/app/action.const'
import {useAppDispatch} from '../../store/hooks'

const Collection = () => {

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

export default Collection
