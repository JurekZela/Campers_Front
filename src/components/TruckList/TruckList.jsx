import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/catalog/TruckInfo/selectors.js';

export default function TruckList () {
  const selectTrucks = useSelector(selectTruck);

  return (
    <ul>{selectTrucks.map((list) => (
      <li key={list.id}>
        <img src={list.gallery[0].thumb} alt={list.name} />
        <p>{list.name}</p>
        <p>{list.price}</p>
        <p>{`${list.rating}(${list.reviews.length} Reviews)`}</p>
        <p>{list.location}</p>
        <p>{list.description}</p>
        <button>Show More</button>
      </li>
    ))}</ul>
  );
}