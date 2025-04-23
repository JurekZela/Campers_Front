import { FiltersContainer } from './Filters-styled.js';
import Location from '../Location/Location.jsx';

export default function Filters() {
  return (
    <FiltersContainer>
      <Location />
      <button>Search</button>
    </FiltersContainer>
  )
};