import { UPDATE_TITLE } from './action.const'

export interface AppState {
  title: string
  numberOfCards: number
  numberOfUniqueCards: number
  price: number
}

const initialState: AppState = {
  title: '',
  numberOfCards: 0,
  numberOfUniqueCards: 0,
  price: 0,
}

const reducer = (state: AppState = initialState, action: any): AppState => {
  let result: AppState
  switch (action.type) {
    case UPDATE_TITLE:
      result = {
        title: action.data.title,
        numberOfCards: action.data.numberOfCards,
        numberOfUniqueCards: action.data.numberOfUniqueCards,
        price: action.data.price,
      }
      break
    default:
      result = state
  }
  return result
}

export default reducer
