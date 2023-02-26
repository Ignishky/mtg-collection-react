import Set from '../model/Set'
import { useNavigate } from 'react-router-dom'
import { AspectRatio, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy'
import { UPDATE_TITLE } from '../../store/app/action.const'
import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../store/hooks'

interface SetDisplayProps {
  set: Set
}

export const SetDisplay = ({ set }: SetDisplayProps) => {

  const dispatch: AppDispatch = useAppDispatch()
  let navigate = useNavigate()

  const routeChange = (set: Set) => {
    dispatch({ type: UPDATE_TITLE, data: { title: set.name } })
    navigate(`/set/${set.code}`)
  }

  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }} onClick={() => routeChange(set)}>
      <CardOverflow variant="soft">
        <AspectRatio objectFit="contain" sx={{ width: 120 }}>
          <img src={set.icon} loading="lazy" alt={set.code} />
        </AspectRatio>
      </CardOverflow>
      <Divider />
      <CardContent sx={{ px: 1 }}>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {set.name}
        </Typography>
      </CardContent>
    </Card>
  )
}
