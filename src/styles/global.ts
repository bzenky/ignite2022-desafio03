import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.background};
  }
  body, input {
        font-family: 'Nunito', sans-serif;
    }
`

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0 18px;
  margin: 0 auto;
`