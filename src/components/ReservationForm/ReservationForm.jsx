import { Formik, Field } from 'formik';
import { ReservationContainer, HeaderForm, FormStyle, TextForm, ButtonForm, NameForm, EmailForm, BookingDateForm, CommentForm } from './ReservationForm-styled.js';
import { useState } from 'react';

export default function ReservationForm() {
  const [name, setName] = useState('Name*');
  const [email, setEmail] = useState('Email*');
  const [booking, setBooking] = useState('Booking date*');

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
          <NameForm id="name" name="name" placeholder={name} onFocus={() => setName(('Name'))} onBlur={() => setName('Name*')}/>
          <EmailForm id="email" name="email" placeholder={email}  onFocus={() => setEmail(('Email'))} onBlur={() => setEmail('Email*')} type="email" />
          <BookingDateForm id="date" name="date" label="00-00-00" placeholder={booking}  onFocus={() => setBooking(('Booking date'))} onBlur={() => setBooking('Booking date*')}/>
          <CommentForm id="comment" name="comment" label="Comment" placeholder="Comment"/>
          <ButtonForm type="submit">Send</ButtonForm>
        </FormStyle>
      </Formik>
    </ReservationContainer>
  )
};