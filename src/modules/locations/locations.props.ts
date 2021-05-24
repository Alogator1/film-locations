import { getLocations, setSearchQuery } from '@home-page/store';
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

  const { locations, searchQuery } = useSelector((state: State) => state.home);

  useEffect(() => {
    if (locations?.length > 0) return;

    dispatch(getLocations());

    return () => {
      dispatch(setSearchQuery(''));
    };
  }, [locations]);

  return { locations, searchQuery };
};

export { LocationsProps, useLocationsProps };
