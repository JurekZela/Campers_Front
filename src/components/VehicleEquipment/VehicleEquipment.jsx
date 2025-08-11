import {
  Equipment,
  EquipmentContainer,
  EquipmentList,
  EquipmentTitle,
} from './VehicleEquipment-styled.js';
import { useSearchParams } from 'react-router-dom';

export default function VehicleEquipment() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);

    updatedParams.set(key, value);

    setSearchParams(updatedParams);
  };

  return (
    <Equipment>
      <EquipmentTitle>Vehicle Equipment</EquipmentTitle>
      <EquipmentContainer>
        <EquipmentList onClick={() => updateSearchParams('AC', 'true')}>
          <img src="/icons/ac.svg" alt="AC" width="32px" height="28px" />
          AC
        </EquipmentList>
        <EquipmentList>
          <img
            src="/icons/transmission.svg"
            alt="transmission"
            width="32px"
            height="28px"
          />
          Automatic
        </EquipmentList>
        <EquipmentList>
          <img
            src="/icons/kitchen.svg"
            alt="kitchen"
            width="32px"
            height="28px"
          />
          Kitchen
        </EquipmentList>
        <EquipmentList>
          <img src="/icons/tv.svg" alt="TV" width="32px" height="28px" />
          TV
        </EquipmentList>
        <EquipmentList>
          <img
            src="/icons/ph_shower.svg"
            alt="bathroom"
            width="32px"
            height="28px"
          />
          Bathroom
        </EquipmentList>
      </EquipmentContainer>
    </Equipment>
  );
}
