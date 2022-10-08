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

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://www.github.com/bzenky.png" alt="Github Profile Photo" />

      <ProfileContentWrapper>
        <ProfileContentHeader>
          <h2>Bruno Zenky</h2>
          <a href="https://www.github.com/bzenky" target="_blank" rel="noopener">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' />
          </a>
        </ProfileContentHeader>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus similique nisi facere aspernatur recusandae tenetur autem illo quod explicabo, nam iusto asperiores cupiditate. Dolor, quam vero commodi ex quos eaque?</p>

        <ProfileSocials>
          <SocialBadge
            icon={<FontAwesomeIcon icon={faGithub} color='#3A536B' size="lg" />}
            description="bzenky"
          />
          <SocialBadge
            icon={<FontAwesomeIcon icon={faBuilding} color='#3A536B' />}
            description="Magazord"
          />
          <SocialBadge
            icon={<FontAwesomeIcon icon={faUserGroup} color='#3A536B' />}
            description="32 seguidores"
          />
        </ProfileSocials>
      </ProfileContentWrapper>
    </ProfileContainer>
  )
}