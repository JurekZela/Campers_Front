import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/catalog/TruckInfo/selectors.js';
import { TruckContainer, TruckImg, Description, TruckCard,ListCardInfo } from './Truck-styled.js';

export default function Truck() {
  const selectTrucks = useSelector(selectTruck);

  return (
    <TruckContainer>
      {selectTrucks.map((list) => (
        <TruckCard key={list.id}>
          <TruckImg src={list.gallery[0].thumb} alt={list.name} />
          <ListCardInfo>
            <p>{list.name}</p>
            <p>{list.price}</p>
            <p>{`${list.rating}(${list.reviews.length} Reviews)`}</p>
            <p>{list.location}</p>
            <Description>{list.description}</Description>
            <button>Show More</button>
          </ListCardInfo>
        </TruckCard>
      ))}
    </TruckContainer>
  )
}