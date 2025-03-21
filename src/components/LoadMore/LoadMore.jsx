import { LoadMoreBtn } from './LoadMore-styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectLimit } from '../../redux/catalog/TruckInfo/selectors.js';
import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';

export default function LoadMore() {
  const dispatch = useDispatch();
  let page = useSelector(selectPage);
  let limit = useSelector(selectLimit);

  const handleLoadMore = () => dispatch(fetchTrucks());

  return (
    <>
      <LoadMoreBtn onClick={handleLoadMore}>
        Load More
      </LoadMoreBtn>
    </>
  );
}