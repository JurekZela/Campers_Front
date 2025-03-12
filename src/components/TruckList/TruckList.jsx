import Truck from '../Truck/Truck.jsx';
import { CatalogContainer } from './TruckList-styled.js';
import LoadMore from '../LoadMore/LoadMore.jsx';

export default function TruckList () {

  return (
    <CatalogContainer>
      <Truck />
      <LoadMore>Load More</LoadMore>
    </CatalogContainer>
  );
}