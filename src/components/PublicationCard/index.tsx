import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  PublicationCardContainer,
  PublicationHeader,
  PublicationPreview
} from "./styles";

interface PublicationCardProps {
  title: string
  content: string
  created_at: Date
}

export function PublicationCard({ title, content, created_at }: PublicationCardProps) {
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR
  })

  return (
    <PublicationCardContainer href="#">
      <PublicationHeader>
        <h3>{title}</h3>
        <span>{formattedDate}</span>
      </PublicationHeader>

      <PublicationPreview>
        {content}
      </PublicationPreview>
    </PublicationCardContainer>
  )
}