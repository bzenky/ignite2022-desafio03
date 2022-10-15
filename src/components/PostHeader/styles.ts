import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 198px;
  padding: 32px 40px;
  gap: 32px;
  margin-top: -80px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: ${({ theme }) => theme.profile};
`

export const Navigation = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;

  a,
  button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 1px;
      background: ${({ theme }) => theme.blue};

      transition: width 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title}
`

export const PostInfoContainer = styled.div`
  display: flex;
  gap: 32px;
`