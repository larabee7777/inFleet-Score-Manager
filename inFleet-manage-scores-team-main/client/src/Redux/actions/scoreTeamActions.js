import * as actionTypes from "./actionTypes";

export const setScoreTeam = (teamInfo) => {
  return {
    type: actionTypes.SET_EXIST_TEAMS,
    teamInfo: teamInfo,
  };
};

export const createScoreTeam = (teamInfo) => {
  return {
    type: actionTypes.CREATE_NEW_TEAM,
    teamInfo: teamInfo,
  };
};

export const updateScoreTeam = (teamInfo) => {
  return {
    type: actionTypes.UPDATE_EXIST_TEAM,
    teamInfo: teamInfo,
  };
};

export const deleteScoreTeam = (id) => {
  return {
    type: actionTypes.REMOVE_SCORE_TEAM,
    id: id,
  };
};
