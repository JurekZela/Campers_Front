import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import { selectTruckById } from '../../../redux/catalog/TruckDetailsById/selectors.js';
import {
  Description,
  Location,
  TruckName,
} from '../../Truck/TruckInfo-styled.js';
import { DetailsImages, ImgContainer, RatLoc, Reviews, Price, AccurateContainer } from './AccurateInfo-styled.js';


export default function AccurateInfoTruck () {
  const selectDetailsById = useSelector(selectTruckById);
  const gallery = selectDetailsById.gallery;

  return(
    <AccurateContainer>
        <TruckName>{selectDetailsById.name}</TruckName>
        <RatLoc>
          {selectDetailsById.rating !== undefined && (
            <Reviews>
              <img
                src="/icons/Rating.svg"
                alt="rating"
                width="16px"
                height="16px"
              />
              {selectDetailsById.rating} ({selectDetailsById.reviews?.length || 0} Reviews)
            </Reviews>
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
        </RatLoc>
        <Price>€{selectDetailsById.price}</Price>
      <ImgContainer>
        {gallery && (gallery.map((img) => (
            <DetailsImages key={nanoid()} src={img.original} alt={selectDetailsById.name} />
        ))
      )}
      </ImgContainer>
        <Description>{selectDetailsById.description}</Description>
    </AccurateContainer>
  );
};