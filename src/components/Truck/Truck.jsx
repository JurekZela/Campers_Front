import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsById } from '../../redux/catalog/TruckDetailsById/operations.js';
import { selectTruck } from '../../redux/TruckInfo/selectors.js';
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
  IconFavorite,
  ShowMore,
  InfoLocMap,
  Rating,
  Location,
  HeardPrc,
  Categories,
} from './TruckInfo-styled.js';
import { renderCategory } from '../Categorie/Categorie.jsx';
import Filters from '../Filters/Filters.jsx';
import { selectFavorites } from '../../redux/catalog/Favorites/selector.js';
import { toggleFavorites } from '../../redux/catalog/Favorites/slice.js';
import { selectFilterItem } from '../../redux/Filter/selector.js';

const itemsFilter = (all, filter) => filter.length > 0 ? filter : all;

export default function Truck() {
  const dispatch = useDispatch();
  const truckItems = useSelector(selectTruck);
  const filterItems = useSelector(selectFilterItem);
  const favorites = useSelector(selectFavorites);

const filteredItems = itemsFilter(truckItems, filterItems);

  const handleShowMore = (id) => {
    dispatch(fetchDetailsById(id));
  };

  const handleFavoriteClick = (id) => {
    dispatch(toggleFavorites(id));
  };

  return (
    <CampersContainerPage>
      <Filters />
      {
        filteredItems &&(<TruckContainer>
            {filteredItems.map((item) => (
              <TruckCard key={item.id}>
                {item.gallery?.[0]?.thumb && (
                  <TruckImg src={item.gallery[0].thumb} alt={item.name} />
                )}
                <ListCardInfo>
                  <InfoPriNam>
                    <TruckName>{item.name}</TruckName>
                    <HeardPrc>
                      <TruckPrice>€{item.price}</TruckPrice>
                      <IconFavorite onClick={() => handleFavoriteClick(item.id)} width="26" height="24" viewBox="0 0 26 24" fill={favorites.includes(item.id) ? "#E44848" : "#101828"} xmlns="http://www.w3.org/2000/svg" alt="heart">
                        <path d="M13 9.854L11.659 7.1705C11.326 6.506 10.7485 5.5505 9.931 4.778C9.127 4.0175 8.164 3.5 7 3.5C4.486 3.5 2.5 5.489 2.5 7.88C2.5 9.6965 3.331 10.979 5.302 12.935C5.8075 13.436 6.3835 13.9775 7.021 14.5745C8.683 16.1345 10.75 18.0755 13 20.6705C15.25 18.0755 17.317 16.1345 18.979 14.5745C19.6165 13.9775 20.194 13.4345 20.698 12.935C22.669 10.979 23.5 9.6965 23.5 7.88C23.5 5.489 21.514 3.5 19 3.5C17.8345 3.5 16.873 4.0175 16.069 4.778C15.2515 5.5505 14.674 6.506 14.341 7.1705L13 9.854ZM13.588 22.292C13.5158 22.3776 13.4257 22.4463 13.3242 22.4935C13.2226 22.5407 13.112 22.5651 13 22.5651C12.888 22.5651 12.7774 22.5407 12.6758 22.4935C12.5743 22.4463 12.4842 22.3776 12.412 22.292C10.0105 19.439 7.837 17.399 6.0475 15.7205C2.95 12.812 1 10.9835 1 7.88C1 4.6325 3.685 2 7 2C9.4 2 11.0785 3.575 12.106 5.012C12.496 5.5595 12.793 6.086 13 6.5C13.2597 5.982 13.5586 5.48456 13.894 5.012C14.9215 3.5735 16.6 2 19 2C22.315 2 25 4.6325 25 7.88C25 10.9835 23.05 12.812 19.9525 15.7205C18.163 17.4005 15.9895 19.442 13.588 22.292Z" />
                      </IconFavorite>
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