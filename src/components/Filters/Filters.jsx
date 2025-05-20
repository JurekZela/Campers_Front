import { FiltersContainer } from './Filters-styled.js';
import Location from '../Location/Location.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';

export default function Filters() {
  return (
    <FiltersContainer>
      <Location />
      <h3>Filters</h3>
      <VehicleEquipment />
      <VehicleType />
      <button>Search</button>
    </FiltersContainer>
  )
};