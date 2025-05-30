import { Equipment, EquipmentContainer, EquipmentList, EquipmentTitle } from './VehicleEquipment-styled.js';

export default function VehicleEquipment () {

  return (
    <Equipment>
      <EquipmentTitle>Vehicle Equipment</EquipmentTitle>
      <EquipmentContainer>
        <EquipmentList>
          <img src="/icons/ac.svg" alt="AC" width="32px" height="28px" />AC
        </EquipmentList>
        <EquipmentList><img src="/icons/transmission.svg" alt="Automatic" width="32px" height="28px" />Automatic
        </EquipmentList>
        <EquipmentList><img src="/icons/kitchen.svg" alt="kitchen" width="32px" height="28px" />Kitchen
        </EquipmentList>
        <EquipmentList><img src="/icons/tv.svg" alt="TV" width="32px" height="28px" />TV
        </EquipmentList>
        <EquipmentList><img src="/icons/ph_shower.svg" alt="Bathroom" width="32px" height="28px" />Bathroom
        </EquipmentList>
      </EquipmentContainer>
    </Equipment>
  );
};