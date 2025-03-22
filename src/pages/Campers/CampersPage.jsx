import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import TruckList from "../../components/TruckList/TruckList.jsx";
import { selectLimit, selectPage } from '../../redux/catalog/TruckInfo/selectors.js';

export default function CampersPage () {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  useMemo(() => {
    dispatch(fetchTrucks({ page, limit }));
  }, [dispatch]);

  return(
    <>
      <TruckList />
    </>
  )
}