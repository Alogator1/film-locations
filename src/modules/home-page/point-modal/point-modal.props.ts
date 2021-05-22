import {
  addComment,
  getCommentsForLocation,
  setOpenedLocation
} from '@home-page/store';
import { State } from '@store';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type PointModalProps = {};

/**
 * <PointModal /> props
 */
const usePointModalProps = (_: PointModalProps) => {
  const { openLocation, locationComments, user } = useSelector(
    (state: State) => state.home
  );

  const form = useFormik({
    initialValues: {
      text: ''
    },
    onSubmit: values => {
      console.log(values);
      dispatch(
        addComment({
          location: openLocation,
          user,
          text: values.text
        })
      );

      form.setFieldValue('text', '');
    },
    enableReinitialize: true
  });

  const dispatch = useDispatch();

  const onCloseLocationClick = () => {
    dispatch(setOpenedLocation(null));
    dispatch(getCommentsForLocation.success([]));
  };

  return { openLocation, onCloseLocationClick, locationComments, form };
};

export { PointModalProps, usePointModalProps };
