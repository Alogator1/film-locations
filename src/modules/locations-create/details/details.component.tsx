import React, { FC } from 'react';
import * as styles from './details.scss';
import { useDetailsProps } from './details.props';
import { Typography } from '@material-ui/core';
import { Field } from '@core/components/field';
import { hoc } from '@core/utils/hoc';
import Select from 'react-select';
import { Button } from '@material-ui/core';

/**
 * <Geocoding />
 */
const Details = hoc(
  useDetailsProps,
  ({ films, onFilmSelect, onNextClick, form }) => (
    <div className={styles.content}>
      <Typography variant='h4' className={styles.title}>
        Complete creation
      </Typography>

      <div className={styles.form}>
        <Field.Input
          placeholder='Enter short description'
          name='description'
          className={styles.input}
        />

        <div className={styles.locationContainer}>
          <Field.Input
            placeholder='Enter location name'
            name='name'
            className={styles.input}
          />

          <p className={styles.locationDescription}>
            * leave blank if want your location name be an address
          </p>
        </div>
        <Select
          className={styles.select}
          value={form?.values?.film}
          options={films}
          getOptionLabel={option => option?.name}
          getOptionValue={option => option?.id + ''}
          onChange={onFilmSelect}
          placeholder='Select film'
        />
      </div>

      {form?.values?.name && form?.values?.description && form?.values?.film && (
        <Button
          variant='contained'
          color='primary'
          className={styles.buttonNext}
          onClick={onNextClick}
        >
          Submit location
        </Button>
      )}
    </div>
  )
);

export { Details };
