import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectTruck } from '../../redux/TruckInfo/selectors.js';
import {
  Equipment,
  EquipmentContainer,
  EquipmentList,
  EquipmentTitle,
} from './VehicleEquipment-styled.js';

export default function VehicleEquipment() {
  let [searchParams, setSearchParams] = new useSearchParams();

  const listTrucks = useSelector(selectTruck);

  const updateSearchParams = (key) => {
    listTrucks.filter(({ AC, transmission, kitchen, TV, bathroom, }) => {
      if (key === 'AC') {
        console.log(AC);
        
      };

      if (key === 'transmission') {
        console.log(transmission);
        
      };

      if (key === 'kitchen') {
        console.log(kitchen);
        
      };

      if (key === 'TV') {
        console.log(TV);
        
      };

      if (key === 'bathroom') {
        console.log(bathroom);
        
      };
    });
  };

  

  return (
    <Equipment>
      <EquipmentTitle>Vehicle Equipment</EquipmentTitle>
      <EquipmentContainer>
        <EquipmentList
          $active={activeType === 'true'}
          onClick={() => updateSearchParams('AC')}
        >
          <img src="/icons/ac.svg" alt="AC" width="32px" height="28px" />
          AC
        </EquipmentList>
        <EquipmentList  $active={activeType === 'true'}
          onClick={(e) => updateSearchParams('transmission')}>
          <img
            src="/icons/transmission.svg"
            alt="transmission"
            width="32px"
            height="28px"
          />
          Automatic
        </EquipmentList>
        <EquipmentList  $active={activeType === 'true'}
          onClick={() => updateSearchParams('kitchen')}>
          <img
            src="/icons/kitchen.svg"
            alt="kitchen"
            width="32px"
            height="28px"
          />
          Kitchen
        </EquipmentList>
        <EquipmentList  $active={activeType === 'true'}
          onClick={() => updateSearchParams('TV')}>
          <img src="/icons/tv.svg" alt="TV" width="32px" height="28px" />
          TV
        </EquipmentList>
        <EquipmentList  $active={activeType === 'true'}
          onClick={() => updateSearchParams('bathroom')}>
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
