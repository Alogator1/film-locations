import React, { FC } from 'react';
import * as styles from './point-modal.scss';
import classNames from 'classnames';
import { PointModalProps, usePointModalProps } from './point-modal.props';
import Modal from '@material-ui/core/Modal';
import { hoc } from '@core';

/**
 * <PointModal />
 */

const PointModal = hoc(
  usePointModalProps,
  ({ onCloseLocationClick, openLocation }) => (
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
      </div>
    </Modal>
  )
);

export { PointModal };
