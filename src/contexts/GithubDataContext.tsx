import { createContext, useEffect, useState } from "react"
import { ghRepoAPI, ghUserAPI } from "../lib/api"

interface GithubDataContextProviderProps {
  children: React.ReactNode
}

interface GithubDataContextProps {
  user: UserProps
  issues: IssuesProps[]
}

interface UserProps {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
}

interface IssuesProps {
  body: string
  created_at: Date
  id: number
  title: string
}

export const GithubDataContext = createContext({} as GithubDataContextProps)

export function GithubDataContextProvider({ children }: GithubDataContextProviderProps) {
  const [user, setUser] = useState({} as UserProps)
  const [issues, setIssues] = useState([] as IssuesProps[])

  async function getUserData() {
    const response = await ghUserAPI.get('bzenky')
    setUser(response.data)
  }

  async function getRepoIssueList() {
    const response = await ghRepoAPI.get('bzenky/ignite2022-desafio03/issues')
    setIssues(response.data)
  }

  useEffect(() => {
    getUserData()
    getRepoIssueList()
  }, [])

  return (
    <GithubDataContext.Provider value={{ user, issues }}>
      {children}
    </GithubDataContext.Provider>
  )
}