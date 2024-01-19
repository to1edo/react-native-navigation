import React from 'react';
import { FC, ReactNode,useReducer } from 'react';
import { AppContext, AppReducer } from './';


export interface AppState{
  username?:string,
  favoriteIcon?:string,
  isLoggedIn: boolean
}
const INITIAL_STATE:AppState = { 
  username: '',
  favoriteIcon: '',
  isLoggedIn: false
}


interface Props{
  children: ReactNode
}
export const AppProvider:FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)

  const onLogin = ()=>{
    dispatch({type: 'login'})
  }

  const onLogout = ()=>{
    dispatch({type: 'logout'})
  }

  return (
    <AppContext.Provider value={{
      state,
      onLogin,
      onLogout
    }}>
      {children}
    </AppContext.Provider>
  )}