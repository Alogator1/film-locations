import { useDispatch, useSelector } from 'react-redux';
import { Location } from '@api';
import { getCommentsForLocation, setOpenedLocation } from '@home-page/store';
import { useClickOutside } from '@core';
import { useRef } from 'react';
import { State } from '@store';

type PointProps = {
  lat: number;
  lng: number;
  name: string;
  location?: Location;
  disabled?: boolean;
};

/**
 * <Point /> props
 */
const usePointProps = ({ location, disabled }: PointProps) => {
  const dispatch = useDispatch();

  const onPointClick = () => {
    if (disabled) return;
    dispatch(setOpenedLocation(location));
    dispatch(getCommentsForLocation(location?.id));
  };

  return { onPointClick };
};

export { PointProps, usePointProps };
