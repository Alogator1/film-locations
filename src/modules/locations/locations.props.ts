import { getUserById } from '@home-page/store';
import { State } from '@store';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type LocationsProps = {};

/**
 * <Locations /> props
 */
const useLocationsProps = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(4));
  }, []);

  return {};
};

export { LocationsProps, useLocationsProps };
