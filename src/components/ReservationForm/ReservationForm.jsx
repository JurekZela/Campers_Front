import { Formik, Field } from 'formik';
import { ReservationContainer, HeaderForm, FormStyle, TextForm, ButtonForm, NameForm, EmailForm, BookingDateForm, CommentForm } from './ReservationForm-styled.js';

export default function ReservationForm() {
  return (
    <ReservationContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStyle>
          <HeaderForm>Book your campervan now</HeaderForm>
          <TextForm>Stay connected! We are always ready to help you.</TextForm>
          <NameForm id="name" name="name" placeholder="Name*" />
          <EmailForm
            id="email"
            name="email"
            placeholder="Email*"
            type="email"
          />
          <BookingDateForm id="date" name="date" label="00-00-00" placeholder="Booking Date*" />
          <CommentForm id="comment" name="comment" label="Comment" placeholder="Comment"  />
          <ButtonForm type="submit">Send</ButtonForm>
        </FormStyle>
      </Formik>
    </ReservationContainer>
  )
};