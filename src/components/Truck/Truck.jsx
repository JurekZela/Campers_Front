import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/catalog/TruckInfo/selectors.js';
import {
  TruckContainer,
  TruckImg,
  Description,
  TruckCard,
  ListCardInfo,
  InfoPriNam,
  TruckName,
  TruckPrice,
  ShowMore,
  InfoLocMap,
  Rating,
  Location,
  HeardPrc,
  BadgesContainer,
} from './Truck-styled.js';

export default function Truck() {
  const selectTrucks = useSelector(selectTruck);

  return (
    <TruckContainer>
      {selectTrucks.map((list) => (
        <TruckCard key={list.id}>
          <TruckImg src={list.gallery[0].thumb} alt={list.name} />
          <ListCardInfo>
            <InfoPriNam>
              <TruckName>{list.name}</TruckName>
              <HeardPrc>
                <TruckPrice>€{list.price}</TruckPrice>
                <img src="/icons/heart.svg"  alt="heart" width='26px' height='24px' />
              </HeardPrc>
            </InfoPriNam>
            <InfoLocMap>
              <Rating>
                <img src="/icons/Rating.svg" alt="rating" width='16px' height='16px' />
                {`${list.rating}(${list.reviews.length} Reviews)`}
              </Rating>
              <Location><img src="/icons/map.svg" alt="location" width='16px' height='16px' />{list.location}</Location>
            </InfoLocMap>
            <Description>{list.description}</Description>
            <BadgesContainer></BadgesContainer>
            <ShowMore>Show More</ShowMore>
          </ListCardInfo>
        </TruckCard>
      ))}
    </TruckContainer>
  )
}