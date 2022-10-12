import { useContext } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import { PublicationCard } from "../PublicationCard";
import { SearchInput } from "../SearchInput";
import {
  PublicationsCardsContainer,
  PublicationsContainer,
  TitleContainer
} from "./styles";

export function Publications() {
  const { filteredIssues } = useContext(GithubDataContext)

  return (
    <PublicationsContainer>
      <TitleContainer>
        <h2>Publicações</h2>
        <span>
          {filteredIssues.length < 1 && 'nenhuma publicação'}
          {filteredIssues.length === 1 
            ? `${filteredIssues.length} publicação`
            : filteredIssues.length > 1
              && `${filteredIssues.length} publicações`
          }
        </span>
      </TitleContainer>

      <SearchInput />

      <PublicationsCardsContainer>
        {filteredIssues.map((issue) =>
          <PublicationCard
            key={issue.id}
            title={issue.title}
            content={issue.body}
            created_at={issue.created_at}
          />
        )}
      </PublicationsCardsContainer>
    </PublicationsContainer>
  )
}