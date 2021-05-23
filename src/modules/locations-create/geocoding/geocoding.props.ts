import { GoogleResponse } from '@api';
import { useDebounce } from '@core';
import { getUserById } from '@home-page/store';
import {
  pickLocation,
  searchLocation,
  selectLocation
} from '@locations-create/store';
import { State } from '@store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type GeocodingProps = {
  form: any;
};

/**
 * <Geocoding /> props
 */
const useGeocodingProps = ({ form }: GeocodingProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(4));
  }, []);

  const locationState = useSelector((state: State) => state.createLocation);

  const [locationSearchValue, setLocationSearchValue] = useState('');

  const {
    home: { user },
    createLocation: { pickedLocation, locationOptions }
  } = useSelector((state: State) => state);

  const debounceSearchQuery = useDebounce(locationSearchValue, 500);

  const onMapPickClick = (lat: number, lng: number) => {
    dispatch(pickLocation(lat, lng));
  };

  const onLocationSelect = (value: any) => {
    dispatch(selectLocation(value));
  };

  const onLocationSearch = value => {
    setLocationSearchValue(value);
  };

  useEffect(() => {
    form.setFieldValue('name', locationState?.pickedFormattedAddress);
    form.setFieldValue('latitude', locationState?.pickedLocation?.lat);
    form.setFieldValue('longitude', locationState?.pickedLocation?.lng);
  }, [locationState]);

  useEffect(() => {
    if (!debounceSearchQuery) return;

    dispatch(searchLocation(debounceSearchQuery));
  }, [debounceSearchQuery]);

  return {
    onMapPickClick,
    form,
    pickedLocation,
    locationOptions,
    onLocationSelect,
    onLocationSearch
  };
};

export { GeocodingProps, useGeocodingProps };
