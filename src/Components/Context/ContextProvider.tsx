import React, {createContext} from "react"
import admin from "./default"

export const DataContext = createContext({})

export function ContextProvider({children}: any) {
	return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
}
