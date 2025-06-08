import { Vehicle, VehicleContainer, TypeTitle, TypeList } from './VehicleType-styled.js';
import { useSearchParams } from 'react-router-dom';

export default function VehicleType() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeType = searchParams.get("form");

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);

    updatedParams.set(key, value);

    setSearchParams(updatedParams);
  };

  return (
    <Vehicle>
      <TypeTitle>Vehicle Type</TypeTitle>
      <VehicleContainer>
        <TypeList   $active={activeType === "panelTruck"} onClick={() => updateSearchParams("form", "panelTruck")}><img src="/icons/Van.svg" alt="Van" width="32px" height="32px" />Van</TypeList>
        <TypeList   $active={activeType === "fullyIntegrated"} onClick={() => updateSearchParams("form", "fullyIntegrated")}><img src="/icons/Fully.svg" alt="Fully Integrated" width="32px" height="32px" />Fully Integrated</TypeList>
        <TypeList   $active={activeType === "alcove"} onClick={() => updateSearchParams("form", "alcove")}><img src="/icons/Alcove.svg" alt="Alcove" width="32px" height="32px" />Alcove</TypeList>
      </VehicleContainer>
    </Vehicle>
  )
}