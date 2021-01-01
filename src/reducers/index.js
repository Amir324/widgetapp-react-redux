import { combineReducers } from "redux";
import widgets from "./widgets";
import ui from "./ui";

export default combineReducers({
  ui,
  widgets
});
