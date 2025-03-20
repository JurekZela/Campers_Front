import Truck from '../Truck/Truck.jsx';
import { CatalogContainer } from './TruckList-styled.js';
import LoadMore from '../LoadMore/LoadMore.jsx';
import { selectPage, selectTotal } from '../../redux/catalog/TruckInfo/selectors.js';
import { useSelector } from 'react-redux';

export default function TruckList () {
const page = useSelector(selectPage);
const total = useSelector(selectTotal);

const maxLoad = page * 4 < total;

  return (
    <CatalogContainer>
      <Truck />
      {maxLoad &&(<LoadMore>Load More</LoadMore>) }
    </CatalogContainer>
  );
}