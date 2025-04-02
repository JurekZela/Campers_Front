import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { selectTruckById } from '../../redux/catalog/TruckDetailsById/selectors.js';
import {ReviewList, ReviewName, ReviewComment} from './Reviews-styled.js';

export default function ReviewsPage () {
  const camperDetailsInfo = useSelector(selectTruckById);
  const reviews = camperDetailsInfo.reviews;
  return(
    <ul>
      {reviews.map((review) => {
        return (
          <ReviewList key={nanoid()}>
            <Avatar sx={{ bgcolor: '#F2F4F7', color: '#E44848' }}>{review.reviewer_name[0]}</Avatar>
            <ReviewName>{review.reviewer_name}</ReviewName>
            <Stack spacing={1}>
            <Rating  name="size-small" defaultValue={review.reviewer_rating} precision={0.5} size="small"   readOnly />
            </Stack>
            <ReviewComment>{review.comment}</ReviewComment>
          </ReviewList>
        )
      })}
    </ul>
  )
}