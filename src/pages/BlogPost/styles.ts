import styled from "styled-components";

export const BlogPostContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0 18px;
  margin: 0 auto;
`

export const PostContentContainer = styled.div`
  padding: 40px 32px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`