import { AppState } from './'

type AppActionType =
{ type:'login'} | 
{ type:'logout'}

export const AppReducer = (state: AppState, action: AppActionType): AppState =>{

  switch (action.type) {
    case 'login':
      return {
        ...state,
        username: 'Elon',
        favoriteIcon: '🍔',
        isLoggedIn: true
      }
    case 'logout':
      return {
        ...state,
        username: '',
        favoriteIcon: '',
        isLoggedIn: false
      }

    default:
      return state
  }
}