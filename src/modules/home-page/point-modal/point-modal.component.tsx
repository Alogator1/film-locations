import React, { FC, useEffect, useRef } from 'react';
import * as styles from './point-modal.scss';
import classNames from 'classnames';
import { PointModalProps, usePointModalProps } from './point-modal.props';
import Modal from '@material-ui/core/Modal';
import { hoc } from '@core';
import { SingleComment } from '@home-page/single-comment';
import { Field } from '@core/components/field';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { Form } from '@core/form';
import AddCommentIcon from '@material-ui/icons/AddComment';

/**
 * <PointModal />
 */

const PointModal = hoc(
  usePointModalProps,
  ({ onCloseLocationClick, openLocation, locationComments, form }) => (
    <Modal
      open={!!openLocation}
      onClose={onCloseLocationClick}
      className={styles.modal}
    >
      <div className={styles.modalInner}>
        <p className={styles.modalTitle}>{openLocation?.name}</p>

        <div className={styles.images}>
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/the_hobbit_an_unexpected_journey.jpg")`
            }}
          />
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/the_hobbit_an_unexpected_journey.jpg")`
            }}
          />
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/the_hobbit_an_unexpected_journey.jpg")`
            }}
          />
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/the_hobbit_an_unexpected_journey.jpg")`
            }}
          />
        </div>

        <div className={styles.commentSection}>
          {locationComments?.map((comment, index) => (
            <SingleComment comment={comment} key={index} />
          ))}
        </div>

        <Form use={form} className={styles.form}>
          <Field.Input
            name='text'
            placeholder='Enter text...'
            className={styles.input}
            after={
              <IconButton
                className={styles.iconButton}
                aria-label='search'
                onClick={() => {
                  form.handleSubmit();
                }}
              >
                <AddCommentIcon />
              </IconButton>
            }
          />
        </Form>
      </div>
    </Modal>
  )
);

export { PointModal };
