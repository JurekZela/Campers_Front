import { useSelector } from 'react-redux';
import { selectTruckById } from '../../redux/catalog/TruckDetailsById/selectors.js';
import { renderCategory } from '../Categorie/Categorie.jsx';
import renderVehicleDetails from '../renderVehicleDetails/renderVehicleDetails.jsx';
import { DetailsCategories, VehicleDetailsText, DetailsContainer, VehicleDetailsContainer } from './Features-styled.js'

export default function FeaturesPage () {
  const camperDetailsInfo = useSelector(selectTruckById);

  return(
    <DetailsContainer>
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
        <div>
            <VehicleDetailsText>Vehicle details</VehicleDetailsText>
            <VehicleDetailsContainer>
                {camperDetailsInfo.form && renderVehicleDetails('Form', camperDetailsInfo.form)}
                {camperDetailsInfo.length && renderVehicleDetails('Length', camperDetailsInfo.length)}
                {camperDetailsInfo.width && renderVehicleDetails('Width', camperDetailsInfo.width)}
                {camperDetailsInfo.height && renderVehicleDetails('Height', camperDetailsInfo.height)}
                {camperDetailsInfo.tank && renderVehicleDetails('Tank', camperDetailsInfo.tank)}
                {camperDetailsInfo.consumption && renderVehicleDetails('Consumption', camperDetailsInfo.consumption)}
            </VehicleDetailsContainer>
        </div>
    </DetailsContainer>
  )
}