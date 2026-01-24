import { NavigateFunction, useNavigate } from 'react-router-dom'
import { AspectRatio, Card, CardContent, CardOverflow, Typography } from '@mui/joy'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'
import { Set } from '../model/SetsResponse'

interface SetDisplayProps {
  set: Set
}

const SetDisplay = ({ set }: SetDisplayProps) => {

  const dispatch: AppDispatch = useAppDispatch()
  const navigate: NavigateFunction = useNavigate()

  function openSetDetail() {
    return () => {
      dispatch({ type: UPDATE_TITLE, data: { title: set.name } })
      navigate(`/set/${set.code}`)
    }
  }

  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 220, height: 100, cursor: 'pointer' }} onClick={openSetDetail()}>
      <CardOverflow variant="soft">
        <AspectRatio objectFit="contain" sx={{ width: 90, paddingTop: 4 }}>
          <img src={set.icon} loading="lazy" alt={set.code} />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ verticalAlign: 'middle' }}>
        <Typography fontWeight="bold" mb={0.5}>
          {set.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SetDisplay
