import { State } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from './store';

type HomePageProps = {};

/**
 * <HomePage /> props
 */
const useHomePageProps = () => {
  const { showSidebar } = useSelector((state: State) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return { showSidebar };
};

export { HomePageProps, useHomePageProps };
