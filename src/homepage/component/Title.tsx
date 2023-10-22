import {useAppSelector} from '../../store/hooks'
import {RootState} from '../../store/store'
import {Stack, Typography} from '@mui/joy'
import {displayPrices} from '../../common/PricesUtils';

const Title = () => {

  const appState = useAppSelector((state: RootState) => state.app)

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ background: "blue" }}>
      <Typography level="h1">
        {appState.title}
      </Typography>
      {appState.numberOfCards && (
        <Typography level="h3">
          {appState.numberOfCards} cards # {displayPrices(appState.prices)}
        </Typography>
      )}
    </Stack>
  )
}

export default Title
