import {
  getLocations,
  setSearchQuery,
  setFilmSearchQuery
} from '@home-page/store';
import { getFilms } from '@locations-create';
import { State } from '@store';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type FilmBaseProps = {};

/**
 * <Locations /> props
 */
const useFilmBaseProps = () => {
  const dispatch = useDispatch();

  const {
    home: { searchQuery },
    createLocation: { films }
  } = useSelector((state: State) => state);

  useEffect(() => {
    if (films?.length > 0) return;

    dispatch(getFilms());

    return () => {
      dispatch(setFilmSearchQuery(''));
    };
  }, [films]);

  return { films, searchQuery };
};

export { FilmBaseProps, useFilmBaseProps };
