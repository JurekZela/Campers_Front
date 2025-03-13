import { LoadMoreBtn } from './LoadMore-styled.js';
import { useDispatch } from 'react-redux';
import { fetchTrucks } from '../../redux/catalog/TruckInfo/operations.js';

export default function LoadMore() {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(fetchTrucks());
  };

  return (
    <>
    <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
    </>
  );
}