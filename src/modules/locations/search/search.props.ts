import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { setSearchQuery } from '@home-page/store';
import { useEffect } from 'react';
import { navigate } from '@store/router';
import { State } from '@store';

type SearchProps = {};

/**
 * <Search /> props
 */
const useSearchProps = (_: SearchProps) => {
  const dispatch = useDispatch();

  const {
    home: { user }
  } = useSelector((state: State) => state);

  const form = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: values => {
      dispatch(setSearchQuery(values?.query));

      form.setSubmitting(false);
    },
    enableReinitialize: true
  });

  useEffect(() => {
    dispatch(setSearchQuery());
  }, []);

  const onCreateLocationClick = () => {
    dispatch(navigate('/locations/create'));
  };

  return { form, onCreateLocationClick, user };
};

export { SearchProps, useSearchProps };
