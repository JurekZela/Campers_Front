import { Formik } from 'formik';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ReservationContainer, HeaderForm, FormStyle, TextForm, ButtonForm, NameForm, EmailForm, BookingDateForm, CommentForm } from './ReservationForm-styled.js';


export default function ReservationForm() {
  const [name, setName] = useState('Name*');
  const [email, setEmail] = useState('Email*');
  const [booking, setBooking] = useState('Booking date*');

  const notify = () => toast("Congratulations! Your reservation has been sent.");

  return (
    <ReservationContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        onSubmit={async () => {
          await new Promise(r => setTimeout(r, 500));
          notify();
        }}
      >
        <FormStyle>
          <ToastContainer />
          <HeaderForm>Book your campervan now</HeaderForm>
          <TextForm>Stay connected! We are always ready to help you.</TextForm>
          <NameForm
            id="name"
            name="name"
            placeholder={name}
            onFocus={() => setName('Name')}
            onBlur={() => setName('Name*')}
          />
          <EmailForm
            id="email"
            name="email"
            placeholder={email}
            onFocus={() => setEmail('Email')}
            onBlur={() => setEmail('Email*')}
            type="email"
          />
          <BookingDateForm
            id="date"
            name="date"
            label="00-00-00"
            placeholder={booking}
            onFocus={() => setBooking('Booking date')}
            onBlur={() => setBooking('Booking date*')}
          />
          <CommentForm
            id="comment"
            name="comment"
            label="Comment"
            placeholder="Comment"
          />
          <ButtonForm type="submit">Send</ButtonForm>
        </FormStyle>
      </Formik>
    </ReservationContainer>
  );
};