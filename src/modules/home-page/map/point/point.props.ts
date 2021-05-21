import { useDispatch, useSelector } from 'react-redux';
import { Location } from '@api';
import { setOpenedLocation } from '@home-page/store';
import { useClickOutside } from '@core';
import { useRef } from 'react';
import { State } from '@store';

type PointProps = {
  lat: number;
  lng: number;
  name: string;
  location?: Location;
};

/**
 * <Point /> props
 */
const usePointProps = ({ location }: PointProps) => {
  const dispatch = useDispatch();

  const onPointClick = () => {
    dispatch(setOpenedLocation(location));
  };

  return { onPointClick };
};

export { PointProps, usePointProps };
