import initialState from './initialState';
import * as types from '../constants/actionType';

// Handles image related actions
export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}
