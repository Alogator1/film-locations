import { State } from '@store';
import { navigate } from '@store/router';
import { useDispatch, useSelector } from 'react-redux';
type SidebarProps = {};

/**
 * <Sidebar /> props
 */
const useSidebarProps = () => {
  const { user } = useSelector((state: State) => state.home);

  const sections = [
    {
      name: 'Locations',
      to: '/locations'
    },
    {
      name: 'Filmbase',
      to: '/filmbase'
    },
    {
      name: 'My Profile',
      to: '/profile'
    }
  ];

  const dispatch = useDispatch();

  const navigation = (to: string) => {
    dispatch(navigate(to));
  };

  const onLoginClick = () => {
    if (!user) {
      navigation('/login');
      return;
    }

    window.localStorage.clear();
    location.reload();
  };

  return { sections, navigation, user, onLoginClick };
};

export { SidebarProps, useSidebarProps };
