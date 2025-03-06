import Truck from '../Truck/Truck.jsx';
import { CatalogContainer, LoadMore } from './TruckList-styled.js';

export default function TruckList () {

  return (
    <CatalogContainer>
      <Truck />
      {/*<LoadMore>Load More</LoadMore>*/}
    </CatalogContainer>
  );
}