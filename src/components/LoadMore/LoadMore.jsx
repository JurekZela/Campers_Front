import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';
import { selectPage, selectLimit, selectLoading } from '../../redux/catalog/TruckInfo/selectors.js';
import { LoadMoreBtn } from './LoadMore-styled.js';

export default function LoadMore() {
  const dispatch = useDispatch();
  let page = useSelector(selectPage);
  let limit = useSelector(selectLimit);
  const loading = useSelector(selectLoading);

  const handleLoadMore = () => dispatch(fetchTrucks({ page, limit }));

  return (
    <>
      <LoadMoreBtn onClick={handleLoadMore}>
        {loading ? 'is Loading' : 'Load More' }
      </LoadMoreBtn>
    </>
  );
}