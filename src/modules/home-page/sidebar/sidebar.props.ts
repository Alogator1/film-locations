import { navigate } from '@store/router';
import { useDispatch } from 'react-redux';
type SidebarProps = {};

/**
 * <Sidebar /> props
 */
const useSidebarProps = () => {
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

  return { sections, navigation };
};

export { SidebarProps, useSidebarProps };
