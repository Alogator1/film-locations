import { State } from '@store';
import { useSelector } from 'react-redux';

type MapProps = {};

/**
 * <Map /> props
 */
const useMapProps = () => {
  const { locations } = useSelector((state: State) => state.home);

  return { locations };
};

export { MapProps, useMapProps };
