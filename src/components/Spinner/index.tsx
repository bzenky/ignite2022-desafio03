import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { SpinnerContainer, SpinnerIcon } from "./styles"


export function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerIcon
        icon={faSpinner}
        size="xl"
        color={'#fff'}
        pulse
      />
    </SpinnerContainer>
  )
}