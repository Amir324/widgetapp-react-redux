import {
  CREATE_WIDGET,
  DELETE_WIDGET,
  EDIT_WIDGET,
  GET_WIDGETS,
  SELECT_WIDGET,
  UPDATE_IN_EDIT_WIDGET,
  DELETE_KEY_VALUE_ROW,
  ADD_KEY_VALUE_ROW,
  SAVE_WIDGET,
} from "../constants/widgets";

export const getWidgets = () => (dispatch) => {
  dispatch({
    type: GET_WIDGETS,
  });
};

export const selectWidget = (id) => (dispatch) => {
  dispatch({
    type: SELECT_WIDGET,
    widgetId: id,
  });
};

export const editWidget = (id) => (dispatch) => {
  dispatch({
    type: EDIT_WIDGET,
    widgetId: id,
  });
};

export const saveWidget = (widget) => (dispatch) => {
  dispatch({
    type: SAVE_WIDGET,
    widget,
  });
};

export const deleteWidget = (id) => (dispatch) => {
  dispatch({
    type: DELETE_WIDGET,
    widgetId: id,
  });
};

export const createWidget = (widget) => (dispatch) => {
  dispatch({
    type: CREATE_WIDGET,
    widget,
  });
};

export const updateInEditWidget = (widget) => (dispatch) => {
  dispatch({
    type: UPDATE_IN_EDIT_WIDGET,
    widget,
  });
};

export const addKeyValueRowToInEditWidget = () => (dispatch) => {
  dispatch({
    type: ADD_KEY_VALUE_ROW,
  });
};

export const deleteKeyValueRowToInEditWidget = (index) => (dispatch) => {
  dispatch({
    type: DELETE_KEY_VALUE_ROW,
    index,
  });
};
