import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsById } from '../../redux/catalog/TruckDetailsById/operations.js';
import { selectTruck } from '../../redux/catalog/TruckInfo/selectors.js';
import {
  CampersContainerPage,
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
} from './TruckInfo-styled.js';
import { renderCategory } from '../Categorie/Categorie.jsx';
import Filters from '../Filters/Filters.jsx';

export default function Truck() {
  const dispatch = useDispatch();
  const items = useSelector(selectTruck);

  const handleShowMore = (id) => {
    dispatch(fetchDetailsById(id));
  };

  return (
    <CampersContainerPage>
      <Filters />
      {
        items &&(<TruckContainer>
            {items.map((item) => (
              <TruckCard key={item.id}>
                {item.gallery?.[0]?.thumb && (
                  <TruckImg src={item.gallery[0].thumb} alt={item.name} />
                )}
                <ListCardInfo>
                  <InfoPriNam>
                    <TruckName>{item.name}</TruckName>
                    <HeardPrc>
                      <TruckPrice>€{item.price}</TruckPrice>
                      <img src="/icons/heart.svg" alt="heart" width="26px" height="24px" />
                    </HeardPrc>
                  </InfoPriNam>

                  <InfoLocMap>
                    {item.rating !== undefined && (
                      <Rating><img src="/icons/Rating.svg" alt="rating" width="16px" height="16px" />{item.rating} ({item.reviews?.length || 0} Reviews)</Rating>
                    )}
                    {item.location && (<Location><img src="/icons/map.svg" alt="location" width="16px" height="16px" />{item.location}</Location>)}
                  </InfoLocMap>

                  <Description>{item.description}</Description>

                  <Categories>
                    {item.transmission && renderCategory("/icons/transmission.svg", item.transmission)}
                    {item.engine && renderCategory("/icons/engine.svg", item.engine)}
                    {item.kitchen && renderCategory("/icons/kitchen.svg", "Kitchen")}
                    {item.AC && renderCategory("/icons/ac.svg", "AC")}
                    {item.TV && renderCategory("/icons/tv.svg", "TV")}
                    {item.radio && renderCategory("/icons/ui-radios.svg", "Radio")}
                    {item.bathroom && renderCategory("/icons/ph_shower.svg", "Bathroom")}
                    {item.refrigerator && renderCategory("/icons/refrigerator.svg", "Refrigerator")}
                    {item.microwave && renderCategory("/icons/microwave.svg", "Microwave")}
                    {item.gas && renderCategory("/icons/gas.svg", "Gas")}
                    {item.water && renderCategory("/icons/water.svg", "Water")}
                  </Categories>
                  <ShowMore to={`/campers/${item.id}/features`} onClick={() => handleShowMore({id: item.id})}>Show More</ShowMore>
                </ListCardInfo>
              </TruckCard>
            ))}
          </TruckContainer>)
      }
    </CampersContainerPage>
  );
}