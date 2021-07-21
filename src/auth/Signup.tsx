import { FC, useState } from 'react';
import { Formik, Field, Form} from 'formik';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

interface SignupValues {
  email: string;
  password: string;
}

const Signup: FC = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user?.email}</p>
      </div>
    );
  }
  
  return (
    <div className="auth signup">
      <div className="container">
        <h1>Signup</h1>

        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values: SignupValues) => {
            createUserWithEmailAndPassword(values.email, values.password);
          }}
        >
          <Form className="auth-form">
            <div className="auth-form__item">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="email"
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
              <button 
                className="auth-submit__btn" 
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Signup;
