import { FiltersContainer, FiltersTitle, FilterSearchButton } from './Filters-styled.js';
import Location from '../Location/Location.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';

export default function Filters() {
  return (
    <FiltersContainer>
      <Location />
      <FiltersTitle>Filters</FiltersTitle>
      <VehicleEquipment />
      <VehicleType />
      <FilterSearchButton>Search</FilterSearchButton>
    </FiltersContainer>
  )
};