import {
  FETCH_IMAGES,
  FETCH_IMAGES_FAIL,
  FETCH_IMAGES_SUCCESS,
  FETCH_POST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS,
} from "./Actions";
import axios from "../services/API";

export function fetchImages(page) {
  return (dispatch, getState) => {
    return loadImages(dispatch, getState, page);
  }
}

const loadImages = (dispatch, getState, page) => {
  dispatch({type: FETCH_IMAGES});

  const params = {
    page,
    per_page: 9,
  };

  return axios.get("/photos", {params})
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