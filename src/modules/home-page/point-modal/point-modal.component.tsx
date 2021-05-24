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
import MapIcon from '@material-ui/icons/Map';

/**
 * <PointModal />
 */

const PointModal = hoc(
  usePointModalProps,
  ({
    onCloseLocationClick,
    openLocation,
    locationComments,
    form,
    user,
    onMapClick
  }) => (
    <Modal
      open={!!openLocation}
      onClose={onCloseLocationClick}
      className={styles.modal}
    >
      <div className={styles.modalInner}>
        <MapIcon className={styles.mapIcon} onClick={onMapClick} />

        <p className={styles.modalTitle}>{openLocation?.name}</p>

        <div className={styles.images}>
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/200x200?sig=1")`
            }}
          />
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/200x200?sig=2")`
            }}
          />
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/200x200?sig=3")`
            }}
          />
          <div
            className={styles.frame}
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/200x200?sig=4")`
            }}
          />
        </div>

        <div className={styles.commentSection}>
          {locationComments?.map((comment, index) => (
            <SingleComment comment={comment} key={index} />
          ))}
        </div>
        {user && (
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
        )}
      </div>
    </Modal>
  )
);

export { PointModal };
