import React, { FC } from 'react';
import * as styles from './locations-create.scss';
import { Header } from '../../core/components/header';
import { hoc } from '@core';
import { useLocationsProps } from './locations-create.props';
import { Form } from '@core/form';
import { Button } from '@material-ui/core';
import { Geocoding } from './geocoding';
import { Details } from './details';

/**
 * <Locations />
 */

const LocationsCreate = hoc(
  useLocationsProps,
  ({ form, step, onNextClick }) => (
    <Form use={form} className={styles.homePage}>
      <Header name={'Create location'} back={'/locations'} />
      {step == 1 && <Geocoding form={form} />}

      {step == 2 && <Details form={form} />}
      {form?.values?.name && step < 2 && (
        <Button
          variant='contained'
          color='primary'
          className={styles.buttonNext}
          onClick={onNextClick}
        >
          Next
        </Button>
      )}
    </Form>
  )
);

export { LocationsCreate };
