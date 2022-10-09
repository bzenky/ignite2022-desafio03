import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Publications } from './components/Publications'

import { Container, GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Container>
        <Profile />
        <Publications />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
