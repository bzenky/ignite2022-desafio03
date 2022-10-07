import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 296px;
  background: url('/header-background.png') no-repeat center;
  background-size: cover;

  img {
    max-width: 148px;
    max-height: 98px;
    margin-top: 64px;
  }
`