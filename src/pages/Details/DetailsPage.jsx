import { selectTruckById } from '/src/redux/catalog/TruckDetailsById/selectors.js';
import { useSelector } from 'react-redux';

export default function DetailsPageById () {
  const detailsInfo = useSelector(selectTruckById);

  return(
    <div>
      <a>{detailsInfo.name}</a>
    </div>
  );
};