import {createContext} from 'react'
import { AppState } from './'

interface ContextProps{
    state:AppState,
    onLogin:()=>void,
    onLogout:()=>void
}

export const AppContext = createContext({} as ContextProps)