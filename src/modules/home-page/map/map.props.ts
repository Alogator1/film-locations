import { State } from '@store';
import { useSelector } from 'react-redux';

type MapProps = {};

/**
 * <Map /> props
 */
const useMapProps = () => {
  const { locations, searchQuery, mapDefaultZoom } = useSelector(
    (state: State) => state.home
  );

  return { locations, searchQuery, mapDefaultZoom };
};

export { MapProps, useMapProps };
