import { Outlet } from 'react-router-dom';
import AccurateInfoTruck from '../../components/Details/AccurateInfo/AccurateInfo.jsx';
import Catalogs from '../../components/Catalogs/Catalogs.jsx';
import { TabsContainer, TabReviews, TabFeatures } from  './DetailsPage-styled.js';

export default function DetailsPageById () {
  return(
    <Catalogs>
     <AccurateInfoTruck />
      <TabsContainer>
        <TabFeatures to="features">Features</TabFeatures>
        <TabReviews to="reviews">Reviews</TabReviews>
      </TabsContainer>
      <Outlet />
    </Catalogs>
  );
};