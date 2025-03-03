import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/catalog/TruckInfo/selectors.js';
import {
  TruckContainer,
  TruckImg,
  Description,
  TruckCard,
  ListCardInfo,
  TruckName,
  TruckPrice,
  ShowMore,
} from './Truck-styled.js';

export default function Truck() {
  const selectTrucks = useSelector(selectTruck);

  return (
    <TruckContainer>
      {selectTrucks.map((list) => (
        <TruckCard key={list.id}>
          <TruckImg src={list.gallery[0].thumb} alt={list.name} />
          <ListCardInfo>
            <TruckName>{list.name}</TruckName>
            <TruckPrice>€{list.price}</TruckPrice>
            <p>{`${list.rating}(${list.reviews.length} Reviews)`}</p>
            <p>{list.location}</p>
            <Description>{list.description}</Description>
            <ShowMore>Show More</ShowMore>
          </ListCardInfo>
        </TruckCard>
      ))}
    </TruckContainer>
  )
}