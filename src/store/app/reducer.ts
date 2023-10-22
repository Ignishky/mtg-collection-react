import {UPDATE_TITLE} from './action.const'
import {Prices} from '../../setDetail/model/SetResponse';

export interface AppState {
  title: string
  numberOfCards: number
  prices: Prices
}

const initialState: AppState = {
  title: '',
  numberOfCards: 0,
  prices: { eur: 0, eurFoil: 0 },
}

const reducer = (state: AppState = initialState, action: any): AppState => {
  let result: AppState
  switch (action.type) {
    case UPDATE_TITLE:
      result = {
        title: action.data.title,
        numberOfCards: action.data.numberOfCards,
        prices: action.data.prices,
      }
      break
    default:
      result = state
  }
  return result
}

export default reducer
