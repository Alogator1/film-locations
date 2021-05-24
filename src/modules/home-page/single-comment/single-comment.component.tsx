import React, { FC } from 'react';
import * as styles from './single-comment.scss';
import { useSingleCommentProps } from './single-comment.props';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import { hoc } from '@core';
import { Roles } from 'src/api/models/common';

/**
 * <SingleComment />
 */
const SingleComment = hoc(
  useSingleCommentProps,
  ({ comment, onDeleteCommentClick, user }) => (
    <div className={styles.singleComment}>
      <img
        src={require('img/user-img.png')}
        alt='img'
        className={styles.userImg}
      />

      <div className={styles.about}>
        <div>
          <p>{comment?.text}</p>
          <p className={styles.commentDate}>
            {moment(comment?.date).format('Do MMM YYYY')}
          </p>
        </div>
        {(user?.role?.id == Roles.Admin || user?.id == comment?.user?.id) && (
          <DeleteIcon
            className={styles.delete}
            onClick={onDeleteCommentClick}
          />
        )}
      </div>
    </div>
  )
);

export { SingleComment };
