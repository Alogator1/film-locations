import { State } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations, setSearchQuery } from './store';

type HomePageProps = {};

/**
 * <HomePage /> props
 */
const useHomePageProps = () => {
  const { showSidebar } = useSelector((state: State) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
    dispatch(setSearchQuery(''));
  }, []);

  return { showSidebar };
};

export { HomePageProps, useHomePageProps };
