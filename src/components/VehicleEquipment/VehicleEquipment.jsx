import { useSelector } from 'react-redux';
import { useState } from 'react';

import { selectTruck } from '../../redux/TruckInfo/selectors.js';
import {
  Equipment,
  EquipmentContainer,
  EquipmentList,
  EquipmentTitle,
} from './VehicleEquipment-styled.js';

export default function VehicleEquipment() {
  const [activeType, setActiveType] = useState([]);

  const listTrucks = useSelector(selectTruck);


  const updateSearchParams = type => {
    setActiveType(prev => {
      if (prev.includes(type)) {
        return prev.filter(t => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  return (
    <Equipment>
      <EquipmentTitle>Vehicle Equipment</EquipmentTitle>
      <EquipmentContainer>
        <EquipmentList
          $active={activeType.includes('AC')}
          onClick={() => updateSearchParams('AC')}
        >
          <img src="/icons/ac.svg" alt="AC" width="32px" height="28px" />
          AC
        </EquipmentList>
        <EquipmentList
          $active={activeType.includes('transmission')}
          onClick={() => updateSearchParams('transmission')}
        >
          <img
            src="/icons/transmission.svg"
            alt="transmission"
            width="32px"
            height="28px"
          />
          Automatic
        </EquipmentList>
        <EquipmentList
          $active={activeType.includes('kitchen')}
          onClick={() => updateSearchParams('kitchen')}
        >
          <img
            src="/icons/kitchen.svg"
            alt="kitchen"
            width="32px"
            height="28px"
          />
          Kitchen
        </EquipmentList>
        <EquipmentList
          $active={activeType.includes('TV')}
          onClick={() => updateSearchParams('TV')}
        >
          <img src="/icons/tv.svg" alt="TV" width="32px" height="28px" />
          TV
        </EquipmentList>
        <EquipmentList
          $active={activeType.includes('bathroom')}
          onClick={() => updateSearchParams('bathroom')}
        >
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
