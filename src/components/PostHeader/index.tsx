import { useNavigate } from "react-router-dom"
import { SocialBadge } from "../../components/SocialBadge"
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { distanceToNow } from "../../utils/distanceToNow"
import { Navigation, PostHeaderContainer, PostInfoContainer, PostTitle } from "./styles"
import { Spinner } from "../Spinner"
import { IssueDataProps } from "../../pages/BlogPost"

interface PostDataProps {
  postData: IssueDataProps
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostDataProps) {
  const history = useNavigate()

  function redirectHome() {
    history('/')
  }

  return (
    <PostHeaderContainer>
      {isLoading
        ? <Spinner />
        : (
          <>
            <Navigation>
              <button onClick={redirectHome}>
                <FontAwesomeIcon icon={faChevronLeft} color='#3294F8' />
                Voltar
              </button>

              <a href={postData.html_url} target="_blank" rel="noopener">
                Ver no Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' />
              </a>
            </Navigation>

            <PostTitle>
              {postData.title}
            </PostTitle>

            <PostInfoContainer>
              <SocialBadge
                icon={<FontAwesomeIcon icon={faGithub} color='#3A536B' size="lg" />}
                description={postData.user.login}
              />

              <SocialBadge
                icon={<FontAwesomeIcon icon={faCalendarDay} color='#3A536B' size="lg" />}
                description={distanceToNow(postData.updated_at)}
              />

              <SocialBadge
                icon={<FontAwesomeIcon icon={faComment} color='#3A536B' size="lg" />}
                description={`${postData.comments < 1 ? 'nenhum' : postData.comments} ${postData.comments < 1
                  ? 'comentário'
                  : 'comentários'} 
              `}
              />
            </PostInfoContainer>
          </>
        )
      }


    </PostHeaderContainer>
  )
}