import {
  NOTES_UPDATE_REQUEST,
  NOTES_UPDATE_SUCCESS,
  NOTES_UPDATE_FAIL,
  NOTES_CREATE_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  NOTE_GET_FAIL,
  NOTE_GET_REQUEST,
  NOTE_GET_SUCCESS,
  NOTE_SHARE_FAIL,
  NOTE_SHARE_SUCCESS,
  NOTE_SHARE_REQUEST,
  SHARE_FAIL,
  SHARE_SUCCESS,
  SHARE_REQUEST,
} from "../constants/notesConstants";

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true };
    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const shareNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_SHARE_REQUEST:
      return { loading: true };
    case NOTE_SHARE_SUCCESS:
      return { loading: false, data: action.payload };
    case NOTE_SHARE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const noteGetReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_GET_REQUEST:
      return { loading: true };
    case NOTE_GET_SUCCESS:
      return { loading: false, data: action.payload };
    case NOTE_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_CREATE_REQUEST:
      return { loading: true };
    case NOTES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case NOTES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const noteUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_UPDATE_REQUEST:
      return { loading: true };
    case NOTES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case NOTES_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_DELETE_REQUEST:
      return { loading: true };
    case NOTES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case NOTES_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const isShareReducer = (state = {}, action) => {
  switch (action.type) {
    case SHARE_REQUEST:
      return { loading: true };
    case SHARE_SUCCESS:
      return { loading: false, success: true };
    case SHARE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
