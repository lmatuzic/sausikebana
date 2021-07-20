import { FC } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface SignupValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup: FC = () => {
  return (
    <div className="auth signup">
      <div className="container">
        <h1>Signup</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }}
          onSubmit={(
            values: SignupValues,
            { setSubmitting }: FormikHelpers<SignupValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="auth-form">
            <div className="auth-form__item">
              <label htmlFor="firstName">First Name</label>
              <Field 
                id="firstName" 
                name="firstName" 
                placeholder="John" />
            </div>

            <div className="auth-form__item">
              <label htmlFor="lastName">Last Name</label>
              <Field 
                id="lastName" 
                name="lastName" 
                placeholder="Doe" />
            </div>

            <div className="auth-form__item">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
              />
            </div>

            <div className="auth-form__item">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="auth-submit__wrapper">
              <button className="auth-submit__btn" type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Signup;
