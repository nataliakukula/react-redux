// import {delay} from 'redux-saga'; -- import error with dalay
import {takeLatest, put} from 'redux-saga/effects';

function* increseAgeAsync(){
  // yield delay(4000);
  yield put({type: "INCRESE AGE ASYNC", value: 1})
}

// * - function generator
// I want to observe every sigle action that gets dispatched
export function* watchIncreseAge(){
  //takeLatest provides debounce capability
  yield takeLatest("INCRESE AGE", increseAgeAsync);
}