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
const Map = hoc(useMapProps, ({ locations }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyDFQKuHItH1zDaAVVSSzeVDq5WtdDpNCtY' }}
    defaultCenter={{ lat: 12, lng: 12 }}
    defaultZoom={8}
    onClick={e => console.log(e)}
  >
    {locations?.map((location, index) => (
      <Point
        key={index}
        lat={location?.latitude}
        lng={location?.longitude}
        name={location?.name}
      />
    ))}
  </GoogleMapReact>
));

export { Map };
