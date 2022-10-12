import { Profile } from "../../components/Profile"
import { Publications } from "../../components/Publications"
import { Container } from "./styles"

export function Home() {
  return (
    <Container>
      <Profile />
      <Publications />
    </Container>
  )
}