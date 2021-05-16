import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { changeSidebar } from '../store/actions';
import { State } from '@store';

type HeaderProps = {
  query?: string;
};

/**
 * <Header /> props
 */
const useHeaderProps = ({ query }: HeaderProps) => {
  const form = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    enableReinitialize: true
  });

  const { showSidebar } = useSelector((state: State) => state.home);

  const dispatch = useDispatch();

  const hideSidebar = () => {
    dispatch(changeSidebar(!showSidebar));
  };

  return { form, query, hideSidebar };
};

export { HeaderProps, useHeaderProps };
