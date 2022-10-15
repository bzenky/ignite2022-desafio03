import { distanceToNow } from '../../utils/distanceToNow';
import {
  PublicationCardContainer,
  PublicationHeader,
  PublicationPreview
} from "./styles";

interface PublicationCardProps {
  title: string
  content: string
  created_at: Date
  postId: number
}

export function PublicationCard({ title, content, created_at, postId }: PublicationCardProps) {
  return (
    <PublicationCardContainer to={`/post/${postId}`}>
      <PublicationHeader>
        <h3>{title}</h3>
        <span>{distanceToNow(created_at)}</span>
      </PublicationHeader>

      <PublicationPreview>
        {content}
      </PublicationPreview>
    </PublicationCardContainer>
  )
}