import { LoadMoreBtn } from './LoadMore-styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectLimit } from '../../redux/catalog/TruckInfo/selectors.js';
import { fetchLoadMore } from '../../redux/catalog/TruckInfo/operations.js';

export default function LoadMore() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const handleLoadMore = () => {
    dispatch(fetchLoadMore({ page, limit }));
  };

  return (
    <>
      <LoadMoreBtn onClick={handleLoadMore}>
        Load More
      </LoadMoreBtn>
    </>
  );
}