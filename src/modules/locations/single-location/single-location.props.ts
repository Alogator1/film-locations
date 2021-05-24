import { Location } from '@api';
import { setMapCenter } from '@home-page/store';
import { navigate } from '@store/router';
import { useDispatch } from 'react-redux';

type SingleLocationProps = {
  location: Location;
};

/**
 * <SingleLocation /> props
 */
const useSingleLocationProps = ({ location }: SingleLocationProps) => {
  const dispatch = useDispatch();

  const onShowOnMapClick = () => {
    dispatch(
      setMapCenter({ lat: location?.latitude, lng: location?.longitude })
    );

    dispatch(navigate('/'));
  };

  return { onShowOnMapClick, location };
};

export { SingleLocationProps, useSingleLocationProps };
