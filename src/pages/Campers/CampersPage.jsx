import TruckList from "../../components/TruckList/TruckList.jsx";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';

export default function CampersPage () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks())
  }, [dispatch]);

  return(
    <>
      <TruckList />
    </>
  )
}