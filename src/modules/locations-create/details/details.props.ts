import { Film, GoogleResponse } from '@api';
import { useDebounce } from '@core';
import { getUserById } from '@home-page/store';
import {
  addLocation,
  getFilms,
  pickLocation,
  searchLocation
} from '@locations-create/store';
import { State } from '@store';
import { navigate } from '@store/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type DetailsProps = {
  form: any;
};

/**
 * <Details /> props
 */
const useDetailsProps = ({ form }: DetailsProps) => {
  const dispatch = useDispatch();

  const { films } = useSelector((state: State) => state.createLocation);

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  const onNextClick = () => {
    dispatch(addLocation(form?.values));
  };

  const onFilmSelect = (film: Film) => {
    form?.setFieldValue('film', film);
  };

  return { films, onFilmSelect, onNextClick, form };
};

export { DetailsProps, useDetailsProps };
