import { useDispatch, useSelector } from 'react-redux';
import { Location } from '@api';
import {
  getCommentsForLocation,
  setMapCenter,
  setOpenedLocation
} from '@home-page/store';
import { useEffect } from 'react';

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
    dispatch(
      setMapCenter({ lat: location?.latitude, lng: location?.longitude })
    );
    dispatch(setOpenedLocation(location));
    dispatch(getCommentsForLocation(location?.id));
  };

  useEffect(
    () => () => {
      dispatch(setMapCenter(null));
    },
    []
  );

  return { onPointClick };
};

export { PointProps, usePointProps };
