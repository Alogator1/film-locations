import { State } from '@store';
import { useSelector } from 'react-redux';

type MapProps = {};

/**
 * <Map /> props
 */
const useMapProps = () => {
  const { locations, searchQuery } = useSelector((state: State) => state.home);

  return { locations, searchQuery };
};

export { MapProps, useMapProps };
