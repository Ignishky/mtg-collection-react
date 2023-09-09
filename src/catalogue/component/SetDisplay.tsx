import Set from '../model/Set'
import {NavigateFunction, useNavigate} from 'react-router-dom'
import {AspectRatio, Card, CardContent, CardOverflow, Divider, Typography} from '@mui/joy'
import {UPDATE_TITLE} from '../../store/app/action.const'
import {AppDispatch} from '../../store/store'
import {useAppDispatch} from '../../store/hooks'

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
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260, height: 100 }} onClick={openSetDetail()}>
      <CardOverflow variant="soft">
        <AspectRatio objectFit="contain" sx={{ width: 90, paddingTop: 4 }}>
          <img src={set.icon} loading="lazy" alt={set.code} />
        </AspectRatio>
      </CardOverflow>
      <Divider />
      <CardContent sx={{ px: 1, verticalAlign: 'middle' }}>
        <Typography fontWeight="bold" mb={0.5}>
          {set.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SetDisplay
