import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { changeSidebar, setSearchQuery } from '../store/actions';
import { State } from '@store';

type HeaderProps = {
  query?: string;
};

/**
 * <Header /> props
 */
const useHeaderProps = ({ query }: HeaderProps) => {
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: values => {
      dispatch(setSearchQuery(values?.query));

      form.setSubmitting(false);
    },
    enableReinitialize: true
  });

  const { showSidebar } = useSelector((state: State) => state.home);

  const hideSidebar = () => {
    dispatch(changeSidebar(!showSidebar));
  };

  return { form, query, hideSidebar };
};

export { HeaderProps, useHeaderProps };
