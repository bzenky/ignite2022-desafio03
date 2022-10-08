import { SocialBadgeContainer } from "./styles";

interface SocialBadgeProps {
  icon: React.ReactNode
  description: string
}

export function SocialBadge({ icon, description }: SocialBadgeProps) {
  return (
    <SocialBadgeContainer>
      {icon}
      <span>{description}</span>
    </SocialBadgeContainer>
  )
}