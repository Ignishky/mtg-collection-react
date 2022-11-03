import './title.css'
import { useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'

export const Title = () => {

  const title = useAppSelector((state: RootState) => state.app.title)

  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </>
  )
}
