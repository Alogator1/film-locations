import React, { FC } from 'react';
import * as styles from './geocoding.scss';
import { GeocodingProps, useGeocodingProps } from './geocoding.props';
import { Typography } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { Field } from '@core/components/field';
import { Point } from '@home-page/map/point';
import TextField from '@material-ui/core/TextField';
import { hoc } from '@core/utils/hoc';

/**
 * <Geocoding />
 */
const Geocoding = hoc(
  useGeocodingProps,
  ({
    onMapPickClick,
    pickedLocation,
    locationOptions,
    onLocationSelect,
    onLocationSearch
  }) => (
    <div className={styles.content}>
      <div className={styles.map}>
        <Typography variant='h4' className={styles.mapTitle}>
          Choose on map
        </Typography>

        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDFQKuHItH1zDaAVVSSzeVDq5WtdDpNCtY'
          }}
          defaultCenter={{ lat: 12, lng: 12 }}
          defaultZoom={1}
          onClick={e => {
            onMapPickClick(e?.lat, e?.lng);
          }}
        >
          {pickedLocation && (
            <Point
              lat={pickedLocation?.lat}
              lng={pickedLocation?.lng}
              name='Your location'
              disabled
            />
          )}
        </GoogleMapReact>

        <Field.Input
          name='name'
          placeholder='Pick location on map'
          className={styles.input}
          disabled
        />
      </div>

      <Typography variant='h4' className={styles.or}>
        OR
      </Typography>

      <div className={styles.address}>
        <Typography variant='h4' className={styles.searchTitle}>
          Address
        </Typography>

        <TextField
          label='Locations'
          variant='outlined'
          className={styles.searchOptions}
          onChange={event => {
            onLocationSearch(event?.target?.value);
          }}
        />

        <div className={styles.options}>
          {locationOptions?.map((option, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => {
                onLocationSelect(option);
              }}
            >
              {option?.formattedAddress}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
);

export { Geocoding };
