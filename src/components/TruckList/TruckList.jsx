import Truck from '../Truck/Truck.jsx';
import { useSelector } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { CatalogContainer } from './TruckList-styled.js';
import LoadMore from '../LoadMore/LoadMore.jsx';
import { selectLimit, selectPage } from '../../redux/catalog/TruckInfo/selectors.js';

export default function TruckList () {
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);

  const totalPages = Math.ceil(23 / limit);

  return (
    <CatalogContainer>
      <Truck />
      {page < totalPages ? <LoadMore>Load More</LoadMore> : toast("We're sorry, there are no more posts to load")}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
    </CatalogContainer>
  );
}