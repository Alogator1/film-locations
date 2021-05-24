import { Comment } from '@api';
import { deleteComment } from '@home-page/store';
import { State } from '@store';
import { useDispatch, useSelector } from 'react-redux';

type SingleCommentProps = {
  comment: Comment;
};

/**
 * <SingleComment /> props
 */
const useSingleCommentProps = ({ comment }: SingleCommentProps) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: State) => state.home);

  const onDeleteCommentClick = () => {
    dispatch(deleteComment(comment?.id));
  };

  return { onDeleteCommentClick, comment, user };
};

export { SingleCommentProps, useSingleCommentProps };
