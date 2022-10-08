import styled from "styled-components";

export const SocialBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.subtitle};
    font-size: 1rem;
  }
`