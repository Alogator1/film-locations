import { Location } from '../../../api/models';
import { Called } from '@core/utils';
import { State } from '@store';
import { StoreContext } from '@store/context';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import {
  addComment,
  getCommentsForLocation,
  getLocations,
  getUserById
} from './actions';

class HomeSaga {
  @Saga(getLocations)
  public *getLocations(
    query: Payload<typeof getLocations>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.location.locations> = yield call(
        api.location.locations
      );

      yield put(getLocations.success(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  @Saga(getCommentsForLocation)
  public *getCommentsForLocation(
    commentId: Payload<typeof getCommentsForLocation>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.comment.commentsByLocationId> = yield call(
        api.comment.commentsByLocationId,
        commentId
      );

      yield put(getCommentsForLocation.success(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  @Saga(getUserById)
  public *getUserById(
    commentId: Payload<typeof getUserById>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.user.getById> = yield call(
        api.user.getById,
        commentId
      );

      yield put(getUserById.success(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  @Saga(addComment)
  public *addComment(
    { location, user, text }: Payload<typeof addComment>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.comment.addComment> = yield call(
        api.comment.addComment,
        {
          user,
          text,
          location,
          date: new Date().toISOString()
        }
      );

      yield put(addComment.success(response.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export { HomeSaga };
