import { v4 as uuidv4 } from "uuid";

import {
  CREATE_WIDGET,
  DELETE_WIDGET,
  EDIT_WIDGET,
  GET_WIDGETS,
  SELECT_WIDGET,
  UPDATE_IN_EDIT_WIDGET,
  ADD_KEY_VALUE_ROW,
  DELETE_KEY_VALUE_ROW,
  SAVE_WIDGET,
  WIDGET,
} from "../constants/widgets";
import { loadFromLocalStorage } from "../utils/utils";

const WIDGET_INIT_STATE = {
  [WIDGET.id]: "",
  [WIDGET.name]: "",
  [WIDGET.magicNumber]: "",
  [WIDGET.keyValuePairs]: [],
};

const widgetsSaved = loadFromLocalStorage() || [];
const initSelectedWidget = widgetsSaved?.length > 0 ? widgetsSaved[0] : {};

const initialState = {
  widgets: widgetsSaved,
  selectedWidget: initSelectedWidget,
  inEditWidget: WIDGET_INIT_STATE,
};

export default function widgetsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WIDGETS: {
      return {
        ...state,
      };
    }
    case SELECT_WIDGET: {
      return {
        ...state,
        selectedWidget: state.widgets.find(
          (_widget) => _widget.id === action.widgetId
        ),
      };
    }

    case EDIT_WIDGET: {
      let widget = state.widgets.find(
        (_widget) => _widget.id === action.widgetId
      );
      return {
        ...state,
        inEditWidget: widget,
      };
    }

    case CREATE_WIDGET: {
      //creating new widget

      return {
        ...state,
        inEditWidget: { ...WIDGET_INIT_STATE, id: uuidv4() },
      };
    }

    case SAVE_WIDGET: {
      let existingWidget = state.widgets.find(
        (_widget) => _widget?.id === action?.widget?.id
      );

      //updating existing widget
      if (existingWidget) {
        let updatedWidgets = state.widgets.map((_widget) => {
          if (_widget?.id === action?.widget?.id) {
            _widget = action.widget;
          }
          return _widget;
        });

        return {
          ...state,
          widgets: updatedWidgets,
          inEditWidget: WIDGET_INIT_STATE,
        };
      }

      //creating new widget
      return {
        ...state,
        widgets: [...state?.widgets, action?.widget],
        inEditWidget: WIDGET_INIT_STATE,
      };
    }

    case DELETE_WIDGET: {
      let updatedWidgets = state.widgets.filter(
        (_widget) => _widget?.id !== action?.widgetId
      );

      return {
        ...state,
        widgets: updatedWidgets,
      };
    }

    case UPDATE_IN_EDIT_WIDGET: {
      return {
        ...state,
        inEditWidget: action?.widget,
      };
    }

    case ADD_KEY_VALUE_ROW: {
      let newKeyValuePairs = [
        ...state.inEditWidget.keyValuePairs,
        { key: "", value: "" },
      ];

      let newInEditWidget = {
        ...state.inEditWidget,
        keyValuePairs: newKeyValuePairs,
      };

      return {
        ...state,
        inEditWidget: newInEditWidget,
      };
    }

    case DELETE_KEY_VALUE_ROW: {
      let index = action?.index;
      let newKeyValuePairs = state.inEditWidget.keyValuePairs.filter(
        (_, _index) => !(_index === index)
      );
      let newInEditWidget = {
        ...state.inEditWidget,
        keyValuePairs: newKeyValuePairs,
      };

      return {
        ...state,
        inEditWidget: newInEditWidget,
      };
    }

    default:
      return state;
  }
}
