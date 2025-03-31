import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { selectTruckById } from '../../redux/catalog/TruckDetailsById/selectors.js';

export default function ReviewsPage () {
  const camperDetailsInfo = useSelector(selectTruckById);
  const reviews = camperDetailsInfo.reviews;
  return(
    <ul>
      {reviews.map((review) => {
        return (
          <li key={nanoid()}>
            <p>{review.reviewer_name}</p>
            <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={review.reviewer_rating} precision={0.5} />
            </Stack>
            <p>{review.comment}</p>
          </li>
        )
      })}
    </ul>
  )
}