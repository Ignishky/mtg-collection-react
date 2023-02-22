import Set from '../model/Set'
import { AspectRatio, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy'

interface SetProps {
  set: Set
}

export const SetDisplay = ({ set }: SetProps) => {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
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
