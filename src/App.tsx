import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Profile } from './components/Profile'

import { Container, GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Container>
        <Profile />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
