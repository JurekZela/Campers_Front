import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { selectTruckById } from '../../redux/catalog/TruckDetailsById/selectors.js';
import { UserInfoReview, ReviewsList, ReviewName, ReviewComment} from './Reviews-styled.js';

export default function ReviewsPage () {
  const camperDetailsInfo = useSelector(selectTruckById);
  const reviews = camperDetailsInfo.reviews;
  return(
    <ReviewsList>
      {reviews.map((review) => {
        return (
          <li key={nanoid()}>
            <UserInfoReview>
              <Avatar sx={{ bgcolor: '#F2F4F7', color: '#E44848' }}>{review.reviewer_name[0]}</Avatar>
              <div>
                <ReviewName>{review.reviewer_name}</ReviewName>
                <Stack spacing={1}>
                  <Rating  name="size-small" defaultValue={review.reviewer_rating} precision={0.5} size="small"   readOnly />
                </Stack>
              </div>
            </UserInfoReview>
            <ReviewComment>{review.comment}</ReviewComment>
          </li>
        )
      })}
    </ReviewsList>
  )
}