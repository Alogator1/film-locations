import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { setSearchQuery } from '@home-page/store';
import { useEffect } from 'react';
import { navigate } from '@store/router';

type SearchProps = {};

/**
 * <Search /> props
 */
const useSearchProps = (_: SearchProps) => {
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: values => {
      dispatch(setSearchQuery(values?.query));
    },
    enableReinitialize: true
  });

  useEffect(() => {
    dispatch(setSearchQuery());
  }, []);

  const onCreateLocationClick = () => {
    dispatch(navigate('/locations/create'));
  };

  return { form, onCreateLocationClick };
};

export { SearchProps, useSearchProps };
