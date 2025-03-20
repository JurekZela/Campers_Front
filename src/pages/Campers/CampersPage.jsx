import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TruckList from "../../components/TruckList/TruckList.jsx";

export default function CampersPage () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return(
    <>
      <TruckList />
    </>
  )
}