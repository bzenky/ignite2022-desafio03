import { createContext, useEffect, useState } from "react"
import { api } from "../lib/api"

interface GithubDataContextProviderProps {
  children: React.ReactNode
}

interface GithubDataContextProps {
  user: UserProps
  issues: IssuesProps[]
  SearchInputFilter: (input: string) => void
  filteredIssues: IssuesProps[]
  isLoading: boolean
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
  number: number
}

export const GithubDataContext = createContext({} as GithubDataContextProps)

export function GithubDataContextProvider({ children }: GithubDataContextProviderProps) {
  const [user, setUser] = useState({} as UserProps)
  const [issues, setIssues] = useState([] as IssuesProps[])
  const [filteredIssues, setFilteredIssues] = useState([] as IssuesProps[])
  const [isLoading, setIsLoading] = useState(false as boolean)

  async function getUserData() {
    try {
      setIsLoading(true)
      const response = await api.get('users/bzenky')
      setUser(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  async function getRepoIssueList() {
    try {
      setIsLoading(true)
      const response = await api.get('repos/bzenky/ignite2022-desafio03/issues')
      setIssues(response.data)
      setFilteredIssues(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  async function SearchInputFilter(input: string) {
    const updatedFilteredIssues = issues.filter(issue => issue.title.toLowerCase().includes(input.toLowerCase()))

    setFilteredIssues(updatedFilteredIssues)
  }

  useEffect(() => {
    getUserData()
    getRepoIssueList()
  }, [])

  return (
    <GithubDataContext.Provider value={{ user, issues, SearchInputFilter, filteredIssues, isLoading }}>
      {children}
    </GithubDataContext.Provider>
  )
}