import styled from "styled-components";

export const PublicationCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 260px;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.post};
  border: 2px solid transparent;
  text-decoration: none;

  &:hover {
    border: 2px solid ${({ theme }) => theme.label};
  }
`

export const PublicationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    display: -webkit-box;
    max-width: 283px;
    height: 54px;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.title};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;	
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.span};
  }
`

export const PublicationPreview = styled.p`
  display: -webkit-box;
  margin-top: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;	
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 104px;
`