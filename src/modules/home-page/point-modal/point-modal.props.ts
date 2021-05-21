import { setOpenedLocation } from '@home-page/store';
import { State } from '@store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type PointModalProps = {};

/**
 * <PointModal /> props
 */
const usePointModalProps = (_: PointModalProps) => {
  const { openLocation } = useSelector((state: State) => state.home);

  const dispatch = useDispatch();

  const onCloseLocationClick = () => {
    dispatch(setOpenedLocation(null));
  };

  useEffect(() => {
    if (!openLocation) return;

    console.log('opened!!!');
  }, [openLocation]);

  return { openLocation, onCloseLocationClick };
};

export { PointModalProps, usePointModalProps };
