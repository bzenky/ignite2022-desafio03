import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px 40px;
  gap: 32px;
  margin-top: -80px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: ${({ theme }) => theme.profile};

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    margin: 8px 0 24px;
    color: ${({ theme }) => theme.text}
  }
`

export const ProfileContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.title};
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    text-decoration: none;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileSocials = styled.div`
  display: flex;
  gap: 24px;
`