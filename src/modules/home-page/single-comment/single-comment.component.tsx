import React, { FC } from 'react';
import * as styles from './single-comment.scss';
import classNames from 'classnames';
import { SingleCommentProps } from './single-comment.props';

/**
 * <SingleComment />
 */
const SingleComment: FC<SingleCommentProps> = ({ comment }) => (
  <div className={styles.singleComment}>
    <img
      src={require('img/user-img.png')}
      alt='img'
      className={styles.userImg}
    />

    <div className={styles.about}>
      <p>{comment?.text}</p>
      <p className={styles.commentDate}>{comment?.date}</p>
    </div>
  </div>
);

export { SingleComment };
