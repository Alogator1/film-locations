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
      if (!values?.text) {
        alert("Comment can't be blank!");
        form.setSubmitting(false);

        return;
      }

      dispatch(
        addComment({
          location: openLocation,
          user,
          text: values.text
        })
      );

      form.setFieldValue('text', '');
      form.setSubmitting(false);
    }
  });

  const onMapClick = () => {
    window.open(
      `http://www.google.com/maps/place/${openLocation?.latitude},${openLocation?.longitude}`,
      '_blank'
    );
  };

  const dispatch = useDispatch();

  const onCloseLocationClick = () => {
    dispatch(setOpenedLocation(null));
    dispatch(getCommentsForLocation.success([]));
  };

  return {
    openLocation,
    onCloseLocationClick,
    locationComments,
    form,
    onMapClick,
    user
  };
};

export { PointModalProps, usePointModalProps };
