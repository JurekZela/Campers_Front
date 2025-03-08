import { useSelector } from 'react-redux';
import { selectTruckById } from '../../../redux/catalog/TruckDetailsById/selectors.js';


export default function AccurateInfoTruck () {
  const selectDetailsById = useSelector(selectTruckById);

  return(
    <div>
      <a>{selectDetailsById.name}</a>
      <div>
        <p>
          <img src="/icons/Rating.svg" alt="rating" width='16px' height='16px' />
          {`${selectDetailsById.rating}( Reviews)`}
        </p>
        <p><img src="/icons/map.svg" alt="location" width='16px' height='16px' />{selectDetailsById.location}</p>
      </div>
      <div>
        <p>€{selectDetailsById.price}</p>
        <img src="/icons/heart.svg"  alt="heart" width='26px' height='24px' />
      </div>
    </div>
  );
};