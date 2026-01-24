import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'
import { Stack, Typography } from '@mui/joy'

const Title = () => {

  const appState = useAppSelector((state: RootState) => state.app)

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ background: "turquoise" }}>
      <Typography level="h1">
        {appState.title}
      </Typography>
      {appState.numberOfCards && (
        <Typography level="h3">
          {appState.numberOfCards} cards # {`${(appState.price / 100).toFixed(2)} €`}
        </Typography>
      )}
    </Stack>
  )
}

export default Title
