import { useEffect, useState } from 'react'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import backend from '../port/CatalogueBackend'
import Set from '../model/Set'
import { SetDisplay } from '../component/SetDisplay'

export const Catalogue = () => {

  const dispatch: AppDispatch = useAppDispatch()
  const [sets, setSets] = useState<Set[]>([])

  useEffect(() => {
    dispatch({ type: UPDATE_TITLE, data: { title: 'Sets' } })
    if (sets.length === 0) {
      const fetchData = async (): Promise<void> => {
        const response = await backend.getSets()
        setSets(response.data.sets)
      }

      fetchData()
    }
  })

  return (
    <div>
      <h3>{sets.length}</h3>
      {
        sets.map(set => {
          return (<SetDisplay key={set.code} set={set} />)
        })
      }
    </div>
  )
}
