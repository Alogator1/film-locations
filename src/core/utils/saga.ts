import { put, take } from 'redux-saga/effects';

/**
 * Result of call function
 */
type Called<F extends (...args) => any> = ReturnType<F> extends PromiseLike<
  infer U
>
  ? U
  : ReturnType<F>;

/**
 * Wait until action type
 */
function* putSync<A extends { type: string }>(
  action: A,
  finisher: { type: string } | string
) {
  yield put(action);

  return yield take(typeof finisher == 'string' ? finisher : finisher.type);
}

export { Called, putSync };
