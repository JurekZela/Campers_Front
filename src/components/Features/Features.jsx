import { useSelector } from 'react-redux';
import { selectTruckById } from '../../redux/catalog/TruckDetailsById/selectors.js';
import { renderCategory } from '../Categorie/Categorie.jsx';
import { DetailsCategories } from '../Categorie/Categorie-styled.js'

export default function FeaturesPage () {
  const camperDetailsInfo = useSelector(selectTruckById);

  return(
    <div>
      <DetailsCategories>
        {camperDetailsInfo.transmission && renderCategory("/icons/transmission.svg", camperDetailsInfo.transmission)}
        {camperDetailsInfo.engine && renderCategory("/icons/engine.svg", camperDetailsInfo.engine)}
        {camperDetailsInfo.kitchen && renderCategory("/icons/kitchen.svg", "Kitchen")}
        {camperDetailsInfo.AC && renderCategory("/icons/ac.svg", "AC")}
        {camperDetailsInfo.TV && renderCategory("/icons/tv.svg", "TV")}
        {camperDetailsInfo.radio && renderCategory("/icons/ui-radios.svg", "Radio")}
        {camperDetailsInfo.bathroom && renderCategory("/icons/ph_shower.svg", "Bathroom")}
        {camperDetailsInfo.refrigerator && renderCategory("/icons/refrigerator.svg", "Refrigerator")}
        {camperDetailsInfo.microwave && renderCategory("/icons/microwave.svg", "Microwave")}
        {camperDetailsInfo.gas && renderCategory("/icons/gas.svg", "Gas")}
        {camperDetailsInfo.water && renderCategory("/icons/water.svg", "Water")}
      </DetailsCategories>
    </div>
  )
}