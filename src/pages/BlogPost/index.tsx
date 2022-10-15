import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import { api } from "../../lib/api"
import { PostHeader } from "../../components/PostHeader"

import { BlogPostContainer, PostContentContainer } from "./styles"

export interface IssueDataProps {
  body: string
  comments: number
  html_url: string
  updated_at: Date
  title: string
  user: {
    login: string
  }
}

export function BlogPost() {
  const [issueData, setIssueData] = useState<IssueDataProps>({} as IssueDataProps)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getPostData = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `repos/bzenky/ignite2022-desafio03/issues/${id}`
      )
      setIssueData(response.data)

    } finally {
      setIsLoading(false)
    }
  }, [issueData])

  useEffect(() => {
    getPostData()

  }, [])

  return (
    <BlogPostContainer>
      <PostHeader
        postData={issueData}
        isLoading={isLoading}
      />

      {!isLoading &&
        <PostContentContainer>
          <ReactMarkdown>
            {issueData.body}
          </ReactMarkdown>
        </PostContentContainer>
      }
    </BlogPostContainer>
  )
}