import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsById } from '../../redux/catalog/TruckDetailsById/operations.js';
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
  Categories,
  Categorie,
} from './Truck-styled.js';
import { selectTruck } from '../../redux/catalog/TruckInfo/selectors.js';


export default function Truck() {
  const selectTrucks = useSelector(selectTruck);
  const dispatch = useDispatch();

  const handleShowMore = (list) => {
    dispatch(fetchDetailsById(list));
  };
  console.log(selectTrucks);
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
            <Categories>
              <Categorie><img src="/icons/transmission.svg" alt="transmission" width="20px" height="20px" />{list.transmission}</Categorie>
              <Categorie><img src="/icons/engine.svg" alt="engine" width="20px" height="20px" />{list.engine}</Categorie>
              {list.kitchen && <Categorie><img src="/icons/kitchen.svg" alt="kitchen" width="20px" height="20px" />Kitchen</Categorie>}
              {list.AC && <Categorie><img src="/icons/ac.svg" alt="ac" width="20px" height="20px" />AC</Categorie>}
              {list.TV && <Categorie><img src="/icons/tv.svg" alt="TV" width="20px" height="20px" />TV</Categorie>}
              {list.radio && <Categorie><img src="/icons/ui-radios.svg" alt="radio" width="20px" height="20px" />Radio</Categorie>}
              {list.bathroom && <Categorie><img src="/icons/ph_shower.svg" alt="bathroom" width="20px" height="20px" />Bathroom</Categorie>}
              {list.refrigerator && <Categorie><img src="/icons/refrigerator.svg" alt="refrigerator" width="20px" height="20px" />Refrigerator</Categorie>}
              {list.microwave && <Categorie><img src="/icons/microwave.svg" alt="microwave" width="20px" height="20px" />Microwave</Categorie>}
              {list.gas && <Categorie><img src="/icons/gas.svg" alt="gas" width="20px" height="20px" />Gas</Categorie>}
              {list.water && <Categorie><img src="/icons/water.svg" alt="water" width="20px" height="20px" />Water</Categorie>}
            </Categories>
            <ShowMore to={`/campers/${list.id}`} onClick={() => handleShowMore(list)}>Show More</ShowMore>
          </ListCardInfo>
        </TruckCard>
      ))}
    </TruckContainer>
  )
}