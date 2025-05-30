import { Vehicle, VehicleContainer, TypeTitle, TypeList } from './VehicleType-styled.js';

export default function VehicleType() {
  return (
    <Vehicle>
      <TypeTitle>Vehicle Type</TypeTitle>
      <VehicleContainer>
        <TypeList><img src="/icons/Van.svg" alt="Van" width="32px" height="32px" />Van</TypeList>
        <TypeList><img src="/icons/Fully.svg" alt="Fully Integrated" width="32px" height="32px" />Fully Integrated</TypeList>
        <TypeList><img src="/icons/Alcove.svg" alt="Alcove" width="32px" height="32px" />Alcove</TypeList>
      </VehicleContainer>
    </Vehicle>
  )
}