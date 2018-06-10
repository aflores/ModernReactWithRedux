import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import fccReducer from './reducer_fcc';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  frn: fccReducer
});

export default rootReducer;
