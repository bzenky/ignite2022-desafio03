import { useContext } from 'react';
import { GithubDataContext } from '../../contexts/GithubDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { SocialBadge } from "../SocialBadge";
import {
  ProfileContainer,
  ProfileContentHeader,
  ProfileContentWrapper,
  ProfileSocials
} from "./styles";
import { Spinner } from '../Spinner';

export function Profile() {
  const { isLoading, user } = useContext(GithubDataContext)

  return (
    <ProfileContainer>
      {isLoading
        ? <Spinner />
        : (
          <>
            <img src={user.avatar_url} alt="Github Profile Photo" />

            <ProfileContentWrapper>
              <ProfileContentHeader>
                <h2>{user.name}</h2>
                <a href={user.html_url} target="_blank" rel="noopener">
                  Github
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' />
                </a>
              </ProfileContentHeader>

              <p>{user.bio}</p>

              <ProfileSocials>
                <SocialBadge
                  icon={<FontAwesomeIcon icon={faGithub} color='#3A536B' size="lg" />}
                  description={user.login}
                />

                {user?.company &&
                  <SocialBadge
                    icon={<FontAwesomeIcon icon={faBuilding} color='#3A536B' />}
                    description={user.company}
                  />
                }

                <SocialBadge
                  icon={<FontAwesomeIcon icon={faUserGroup} color='#3A536B' />}
                  description={`${user.followers} seguidores`}
                />
              </ProfileSocials>
            </ProfileContentWrapper>
          </>
        )
      }
    </ProfileContainer>
  )
}