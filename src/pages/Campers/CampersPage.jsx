import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import { fetchTrucks } from '../../redux/TruckInfo/operations.js';
import { selectLimit, selectPage } from '../../redux/TruckInfo/selectors.js';
import Truck from '../../components/Truck/Truck.jsx';
import LoadMore from '../../components/LoadMore/LoadMore.jsx';
import  Catalogs  from '../../components/Catalogs/Catalogs.jsx';

export default function CampersPage () {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const totalPages = Math.ceil(23 / limit);

  useEffect(() => {
    if (page > totalPages) {
      toast("We're sorry, there are no more posts to load");
    }
  }, [page, totalPages]);


  useMemo(() => {
    dispatch(fetchTrucks({ page, limit }));
  }, [dispatch]);

  return(
    <Catalogs>
      <Truck />
      {page <= totalPages && (<LoadMore/>)}
      <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false}
                      newestOnTop={false} closeOnClick={false} rtl={false}
                      pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}
      />
    </Catalogs>
  )
}