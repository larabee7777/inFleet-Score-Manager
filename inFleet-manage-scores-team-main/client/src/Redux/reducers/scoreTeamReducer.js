/* eslint-disable array-callback-return */
import * as actionTypes from "../actions/actionTypes";
const scoreTeamReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_EXIST_TEAMS:
      return action.teamInfo;
    case actionTypes.CREATE_NEW_TEAM:
      return [...state, Object.assign({}, action.teamInfo)];
    case actionTypes.UPDATE_EXIST_TEAM:
      let genTeam = [];
      state.map((team) => {
        if (parseInt(team.teamId) === parseInt(action.teamInfo.teamId)) {
          let mainInfo = action.teamInfo;
          mainInfo.createdAt = team.createdAt;
          mainInfo.updatedAt = team.updatedAt;
          mainInfo.team_status = team.team_status;
          genTeam.push(mainInfo);
        } else {
          genTeam.push(team);
        }
      });
      return genTeam;
    case actionTypes.REMOVE_SCORE_TEAM:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

export default scoreTeamReducer;
