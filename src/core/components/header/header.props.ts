import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { State } from '@store';
import { navigate } from '@store/router';

type HeaderProps = {
  name?: string;
  back?: string;
};

/**
 * <Header /> props
 */
const useHeaderProps = ({ name, back }: HeaderProps) => {
  const dispatch = useDispatch();

  const { previous } = useSelector((state: State) => state.router);

  const onGoBackClick = () => {
    dispatch(navigate(back || '/'));
  };

  return { onGoBackClick, name };
};

export { HeaderProps, useHeaderProps };
