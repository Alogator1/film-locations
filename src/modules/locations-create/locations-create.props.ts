import { getUserById } from '@home-page/store';
import { State } from '@store';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pickLocation, searchLocation } from './store';
import { Location, GoogleResponse } from '@api';
import { useFormik } from 'formik';
import { useDebounce } from '@core/hooks';

type LocationsProps = {};

/**
 * <Locations /> props
 */
const useLocationsProps = () => {
  const {
    home: { user },
    createLocation
  } = useSelector((state: State) => state);

  const [step, setStep] = useState(1);

  const initialValues: Location = {
    name: '',
    latitude: null,
    longitude: null,
    city: null,
    film: null,
    description: '',
    user: user
  };

  const form = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    },
    enableReinitialize: true
  });

  const onNextClick = () => {
    setStep(step + 1);
    console.log(form?.values);
  };

  useEffect(() => {
    form.setFieldValue('name', createLocation?.pickedFormattedAddress);
    form.setFieldValue('latitude', createLocation?.pickedLocation?.lat);
    form.setFieldValue('longitude', createLocation?.pickedLocation?.lng);
    form.setFieldValue('city', createLocation?.city);
  }, [createLocation]);

  return {
    form,
    step,
    onNextClick
  };
};

export { LocationsProps, useLocationsProps };
