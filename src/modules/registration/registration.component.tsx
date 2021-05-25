import React, { FC, Fragment } from 'react';
import * as styles from './registration.scss';
import { useRegistrationProps } from './registration.props';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Header } from '@core/components/header';
import { hoc } from '@core';
import { Form } from '@core/form';
import { Field } from '@core/components/field';

/**
 * <Registration />
 */
const Registration = hoc(useRegistrationProps, ({ form, setChecked }) => (
  <Fragment>
    <Header name={'Hello again, stranger!'} back={'/login'} />

    <Container component='main' maxWidth='xs'>
      <div className={styles.paper}>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Form className={styles.form} use={form}>
          <Field.TextField label='Email Address' name='email' />

          <Field.TextField label='Password' name='password' type='password' />

          <Field.TextField label='Name' name='name' />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={styles.submit}
          >
            Sign Up
          </Button>

          <Grid container className={styles.request}>
            <Checkbox
              onChange={(_, checked) => {
                setChecked(checked);
              }}
            />
            <Typography component='p' variant='h6'>
              I want to request admin access
            </Typography>
          </Grid>
        </Form>
      </div>
    </Container>
  </Fragment>
));

export { Registration };
