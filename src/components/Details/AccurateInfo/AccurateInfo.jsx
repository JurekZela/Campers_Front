import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import { selectTruckById } from '../../../redux/catalog/TruckDetailsById/selectors.js';
import {
  Description,
  InfoLocMap,
  Location,
  Rating,
  TruckName,
  TruckPrice,
} from '../../Truck/TruckInfo-styled.js';
import { DetailsImages } from './AccurateInfo-styled.js';


export default function AccurateInfoTruck () {
  const selectDetailsById = useSelector(selectTruckById);
  const gallery = selectDetailsById.gallery;

  return(
    <div>
        <TruckName>{selectDetailsById.name}</TruckName>
        <InfoLocMap>
          {selectDetailsById.rating !== undefined && (
            <Rating>
              <img
                src="/icons/Rating.svg"
                alt="rating"
                width="16px"
                height="16px"
              />
              {selectDetailsById.rating} ({selectDetailsById.reviews?.length || 0} Reviews)
            </Rating>
          )}
          {selectDetailsById.location && (
            <Location>
              <img
                src="/icons/map.svg"
                alt="location"
                width="16px"
                height="16px"
              />
              {selectDetailsById.location}
            </Location>
          )}
        </InfoLocMap>
        <TruckPrice>€{selectDetailsById.price}.00</TruckPrice>
      {gallery && (gallery.map((img) => (
        <DetailsImages key={nanoid()} src={img.original} alt={selectDetailsById.name} />
      ))
      )}
        <Description>{selectDetailsById.description}</Description>
    </div>
  );
};