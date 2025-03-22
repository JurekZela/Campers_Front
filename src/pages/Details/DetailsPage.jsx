import { Outlet, NavLink } from 'react-router-dom';
import AccurateInfoTruck from '../../components/Details/AccurateInfo/AccurateInfo.jsx';
import Catalogs from '../../components/Catalogs/Catalogs.jsx';

export default function DetailsPageById () {
  return(
    <Catalogs>
     <AccurateInfoTruck />
      <NavLink to="features">Features</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </Catalogs>
  );
};