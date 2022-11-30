import { combineReducers } from "redux";
import scoreTeamReducer from "./scoreTeamReducer";

export default combineReducers({
  scoreTeams: scoreTeamReducer,
});
