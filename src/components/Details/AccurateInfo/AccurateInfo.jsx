import { useSelector } from 'react-redux';
import { selectTruckById } from '../../../redux/catalog/TruckDetailsById/selectors.js';
import { HeardPrc, InfoLocMap, Location, Rating, TruckPrice } from '../../Truck/Truck-styled.js';

export default function AccurateInfoTruck () {
  const detailsInfo = useSelector(selectTruckById);
  console.log(detailsInfo);

  return(
    <div>
      <a>{detailsInfo.name}</a>
      <InfoLocMap>
        <Rating>
          <img src="/icons/Rating.svg" alt="rating" width='16px' height='16px' />
          {`${detailsInfo.rating}(${detailsInfo.reviews.length} Reviews)`}
        </Rating>
        <Location><img src="/icons/map.svg" alt="location" width='16px' height='16px' />{detailsInfo.location}</Location>
      </InfoLocMap>
      <div>
        <p>€{detailsInfo.price}</p>
        <img src="/icons/heart.svg"  alt="heart" width='26px' height='24px' />
      </div>
    </div>
  );
};