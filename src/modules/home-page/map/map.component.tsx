import React, { FC } from 'react';
import * as styles from './map.scss';
import classNames from 'classnames';
import { MapProps, useMapProps } from './map.props';
import GoogleMapReact from 'google-map-react';
import { hoc } from '@core';
import { Point } from './point';

/**
 * <Map />
 */
const Map = hoc(useMapProps, ({ locations, searchQuery, mapDefaultZoom }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyDFQKuHItH1zDaAVVSSzeVDq5WtdDpNCtY' }}
    defaultCenter={mapDefaultZoom ? mapDefaultZoom : { lat: 12, lng: 12 }}
    defaultZoom={mapDefaultZoom ? 10 : 1}
    center={mapDefaultZoom && mapDefaultZoom}
    zoom={mapDefaultZoom && 10}
  >
    {locations
      ?.filter(location =>
        location?.name?.toUpperCase().includes(searchQuery?.toUpperCase())
      )
      ?.map((location, index) => (
        <Point
          key={index}
          lat={location?.latitude}
          lng={location?.longitude}
          name={location?.name}
          location={location}
        />
      ))}
  </GoogleMapReact>
));

export { Map };
