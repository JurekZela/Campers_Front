import { FiltersContainer, FiltersTitle, FilterSearchButton } from './Filters-styled.js';
import Location from '../Location/Location.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';
import { useSearchParams } from 'react-router-dom';
import { fetchTrucksByFilter } from '../../redux/Filter/operations.js';
import { useDispatch } from 'react-redux';

export default function Filters() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const form = searchParams.get("form");

  const onSubmit = (e) => {
    e.preventDefault();

    if (form === "") return;

    dispatch(fetchTrucksByFilter({ form }));
  };

  return (
    <FiltersContainer>
      <Location />
      <FiltersTitle>Filters</FiltersTitle>
      <VehicleEquipment />
      <VehicleType />
      <FilterSearchButton onClick={onSubmit}>Search</FilterSearchButton>
    </FiltersContainer>
  )
};