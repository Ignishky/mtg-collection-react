import { useEffect } from 'react'
import { AppDispatch } from '../store/store'
import { UPDATE_TITLE } from '../store/app/action.const'
import { useAppDispatch } from '../store/hooks'

export const Collection = () => {

  const dispatch: AppDispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: UPDATE_TITLE, data: { title: 'Collection' } })
  })

  return (
    <>
      <div className="collection">
        <h3>Collection</h3>
      </div>
    </>
  )
}
