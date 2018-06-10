import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

export const CHECK_FRN = 'check_frn';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=SONAJA321';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());

  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function checkFrn(frn) {
  const frnUri = `http://data.fcc.gov/api/license-view/basicSearch/getLicenses?searchValue=${frn}&format=json`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const request = axios.get(proxyUrl+frnUri, { 
    headers: {'Access-Control-Allow-Origin': '*',
              'methods': 'GET',
              'Content-Type': 'application/json'
          }
        });

  return {
    type: CHECK_FRN,
    payload: request,
  };
}