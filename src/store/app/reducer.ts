import { AppState } from './types'
import { UPDATE_TITLE } from './action.const'

const initialState: AppState = {
  title: '',
  numberOfCards: 0
}

const reducer = (state: AppState = initialState, action: any): AppState => {
  let result: AppState
  switch (action.type) {
    case UPDATE_TITLE:
      result = {
        title: action.data.title,
        numberOfCards: state.numberOfCards
      }
      break
    default:
      result = state
  }
  return result
}

export default reducer