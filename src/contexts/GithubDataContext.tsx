import { createContext } from "react"

interface GithubDataContextProviderProps {
  children: React.ReactNode
}

interface GithubDataContextProps {

}

export const GithubDataContext = createContext({} as GithubDataContextProps)

export function GithubDataContextProvider({ children }: GithubDataContextProviderProps) {
  return (
    <GithubDataContext.Provider value={{}}>
      {children}
    </GithubDataContext.Provider>
  )
}