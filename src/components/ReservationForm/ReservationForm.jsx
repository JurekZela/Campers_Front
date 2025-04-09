import { Formik, Field, Form } from 'formik';
import { ReservationContainer, HeaderForm, TextForm, ButtonForm } from './ReservationForm-styled.js';

export default function ReservationForm() {
  return (
    <ReservationContainer>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <HeaderForm>Book your campervan now</HeaderForm>
          <TextForm>Stay connected! We are always ready to help you.</TextForm>
          <Field id="name" name="name" placeholder="Name*" />
          <Field
            id="email"
            name="email"
            placeholder="Email*"
            type="email"
          />
          <Field id="date" name="date" label="00-00-00" placeholder="Booking Date*" />
          <Field id="comment" name="comment" label="Comment" placeholder="Comment"  />
          <ButtonForm type="submit">Send</ButtonForm>
        </Form>
      </Formik>
    </ReservationContainer>
  )
};