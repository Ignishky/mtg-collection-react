import { useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'
import { Stack, Typography } from '@mui/joy'

export const Title = () => {

  const title = useAppSelector((state: RootState) => state.app.title)

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ background: "blue" }}>
      <Typography level="display1">
        {title}
      </Typography>
    </Stack>
  )
}
