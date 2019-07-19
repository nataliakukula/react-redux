export const loading = () => {
  return {
    type: "LOADING"
  }
}

export const increseAgeAsync = (val) => {
  return { type: "INCRESE AGE", value: val }
}

//weird use of dispatch with 'redux-thunk'
export const increseAge = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(()=>{
      dispatch(increseAgeAsync(val))
    }, 5000)
  }
}

export const decreseAge = (val) => {
  return { type: "DECRESE AGE", value: val }
}