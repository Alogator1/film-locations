import { login, registration } from '@home-page/store';
import { State } from '@store';
import { navigate } from '@store/router';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

type RegistrationProps = {};

const validationSchema = object({
  email: string()
    .required()
    .nullable()
    .email()
    .label('Email'),

  password: string()
    .required()
    .nullable()
    .label('Password'),

  name: string()
    .required()
    .nullable()
    .label('Name')
});

/**
 * <Registration /> props
 */
const useRegistrationProps = (_: RegistrationProps) => {
  const {
    home: { user }
  } = useSelector((state: State) => state);

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    onSubmit: values => {
      dispatch(registration(values));

      if (checked) {
        window.location.href = `mailto:vtelyachy@gmail.com?subject=I want to request access&body=Hi,I want to request admin access on my account, with email ${values.email}`;
      }
    },
    enableReinitialize: true,
    validationSchema
  });

  useEffect(() => {
    if (!user) return;
    dispatch(navigate('/'));
  }, [user]);

  return { form, setChecked };
};

export { RegistrationProps, useRegistrationProps };
