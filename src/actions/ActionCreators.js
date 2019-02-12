import {
  FETCH_IMAGES,
  FETCH_IMAGES_FAIL,
  FETCH_IMAGES_SUCCESS,
  FETCH_POST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS, SET_CURRENT_POST
} from "./Actions";
import axios from "../services/API";

export function fetchImages() {
  return loadImages;
}

const loadImages = (dispatch, getState) => {
  dispatch({type: FETCH_IMAGES});

  return axios.get("/photos")
    .then(res => {
      dispatch({type: FETCH_IMAGES_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: FETCH_IMAGES_FAIL, payload: "Could not fetch images"});
    });
};

export function fetchPost(id) {
  return (dispatch, getState) => {
    return loadPost(dispatch, getState, id);
  }
}

const loadPost = (dispatch, getState, id) => {
  dispatch({type: FETCH_POST});

  return axios.get(`/photos/${id}`)
    .then(res => {
      dispatch({type: FETCH_POST_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: FETCH_POST_FAIL, payload: "Could not fetch post"})
    });
};