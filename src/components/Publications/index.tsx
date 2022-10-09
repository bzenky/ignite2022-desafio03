import { PublicationCard } from "../PublicationCard";
import { SearchInput } from "../SearchInput";
import { PublicationsCardsContainer, PublicationsContainer, TitleContainer } from "./styles";

export function Publications() {
  return (
    <PublicationsContainer>
      <TitleContainer>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </TitleContainer>

      <SearchInput />

      <PublicationsCardsContainer>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </PublicationsCardsContainer>
    </PublicationsContainer>
  )
}