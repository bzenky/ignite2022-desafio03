import styled from "styled-components";

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;

  h2 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.subtitle}
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.span}
  }
`

export const PublicationsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  padding: 48px 0;
`