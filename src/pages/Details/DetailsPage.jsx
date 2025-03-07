import AccurateInfoTruck from '../../components/Details/AccurateInfo/AccurateInfo.jsx';
import { Outlet, NavLink } from 'react-router-dom';

export default function DetailsPageById () {
  return(
    <>
     <AccurateInfoTruck />
      <NavLink to="reviews">Reviews</NavLink>
      <NavLink to="features">Features</NavLink>
      <Outlet />
    </>
  );
};