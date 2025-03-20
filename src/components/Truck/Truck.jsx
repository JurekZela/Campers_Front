import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsById } from '../../redux/catalog/TruckDetailsById/operations.js';
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
  Categories,
  Categorie,
} from './Truck-styled.js';

export default function Truck() {
  const items = useSelector(selectTruck);

  const dispatch = useDispatch();
  const handleShowMore = (id) => {
    dispatch(fetchDetailsById(id));
  };

  return (
    <TruckContainer>
      {items.map(item => (
        <TruckCard key={item.id}>
          {item.gallery?.[0]?.thumb && (
            <TruckImg src={item.gallery[0].thumb} alt={item.name} />
          )}
          <ListCardInfo>
            <InfoPriNam>
              <TruckName>{item.name}</TruckName>
              <HeardPrc>
                <TruckPrice>€{item.price}.00</TruckPrice>
                <img
                  src="/icons/heart.svg"
                  alt="heart"
                  width="26px"
                  height="24px"
                />
              </HeardPrc>
            </InfoPriNam>
            <InfoLocMap>
              {item.rating !== undefined && (
                <Rating>
                  <img
                    src="/icons/Rating.svg"
                    alt="rating"
                    width="16px"
                    height="16px"
                  />
                  {`${item.rating} (${item.reviews?.length || 0} Reviews)`}
                </Rating>
              )}
              {item.location && (
                <Location>
                  <img
                    src="/icons/map.svg"
                    alt="location"
                    width="16px"
                    height="16px"
                  />
                  {item.location}
                </Location>
              )}
            </InfoLocMap>
            <Description>{item.description}</Description>
            <Categories>
              {item.transmission && (
                <Categorie>
                  <img
                    src="/icons/transmission.svg"
                    alt="transmission"
                    width="20px"
                    height="20px"
                  />
                  {item.transmission}
                </Categorie>
              )}
              {item.engine && (
                <Categorie>
                  <img
                    src="/icons/engine.svg"
                    alt="engine"
                    width="20px"
                    height="20px"
                  />
                  {item.engine}
                </Categorie>
              )}
              {item.kitchen && (
                <Categorie>
                  <img
                    src="/icons/kitchen.svg"
                    alt="kitchen"
                    width="20px"
                    height="20px"
                  />
                  Kitchen
                </Categorie>
              )}
              {item.AC && (
                <Categorie>
                  <img
                    src="/icons/ac.svg"
                    alt="ac"
                    width="20px"
                    height="20px"
                  />
                  AC
                </Categorie>
              )}
              {item.TV && (
                <Categorie>
                  <img
                    src="/icons/tv.svg"
                    alt="TV"
                    width="20px"
                    height="20px"
                  />
                  TV
                </Categorie>
              )}
              {item.radio && (
                <Categorie>
                  <img
                    src="/icons/ui-radios.svg"
                    alt="radio"
                    width="20px"
                    height="20px"
                  />
                  Radio
                </Categorie>
              )}
              {item.bathroom && (
                <Categorie>
                  <img
                    src="/icons/ph_shower.svg"
                    alt="bathroom"
                    width="20px"
                    height="20px"
                  />
                  Bathroom
                </Categorie>
              )}
              {item.refrigerator && (
                <Categorie>
                  <img
                    src="/icons/refrigerator.svg"
                    alt="refrigerator"
                    width="20px"
                    height="20px"
                  />
                  Refrigerator
                </Categorie>
              )}
              {item.microwave && (
                <Categorie>
                  <img
                    src="/icons/microwave.svg"
                    alt="microwave"
                    width="20px"
                    height="20px"
                  />
                  Microwave
                </Categorie>
              )}
              {item.gas && (
                <Categorie>
                  <img
                    src="/icons/gas.svg"
                    alt="gas"
                    width="20px"
                    height="20px"
                  />
                  Gas
                </Categorie>
              )}
              {item.water && (
                <Categorie>
                  <img
                    src="/icons/water.svg"
                    alt="water"
                    width="20px"
                    height="20px"
                  />
                  Water
                </Categorie>
              )}
            </Categories>
            <ShowMore
              to={`/campers/${item.id}`}
              onClick={() => handleShowMore({ id: item.id })}
            >
              Show More
            </ShowMore>
          </ListCardInfo>
        </TruckCard>
      ))}
    </TruckContainer>
  );
}
