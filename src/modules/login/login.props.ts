import { login } from '@home-page/store';
import { State } from '@store';
import { navigate } from '@store/router';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

type LoginProps = {};

const validationSchema = object({
  email: string()
    .required()
    .nullable()
    .email()
    .label('Email'),

  password: string()
    .required()
    .nullable()
    .label('Password')
});

/**
 * <Login /> props
 */
const useLoginProps = (_: LoginProps) => {
  const {
    home: { user }
  } = useSelector((state: State) => state);

  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('submitting!');

      dispatch(login(values?.email, values?.password));
    },
    enableReinitialize: true,
    validationSchema
  });

  useEffect(() => {
    if (!user) return;
    dispatch(navigate('/'));
  }, [user]);

  return { form };
};

export { LoginProps, useLoginProps };
