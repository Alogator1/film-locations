import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { setFilmSearchQuery, setSearchQuery } from '@home-page/store';
import { useEffect } from 'react';
import { navigate } from '@store/router';
import { State } from '@store';

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
      dispatch(setFilmSearchQuery(values?.query));

      form.setSubmitting(false);
    },
    enableReinitialize: true
  });

  useEffect(() => {
    dispatch(setFilmSearchQuery());
  }, []);

  return { form };
};

export { SearchProps, useSearchProps };
