import { VehicleContainer, TypeTitle } from './VehicleType-styled.js';

export default function VehicleType() {
  return (
    <div>
      <TypeTitle>Vehicle Type</TypeTitle>
      <VehicleContainer>
        <li><img src="/icons/Van.svg" alt="Van" width="32px" height="32px" />Van</li>
        <li><img src="/icons/Fully.svg" alt="Fully Integrated" width="32px" height="32px" />Fully Integrated</li>
        <li><img src="/icons/Alcove.svg" alt="Alcove" width="32px" height="32px" />Alcove</li>
      </VehicleContainer>
    </div>
  )
}