import axios from "axios";
import { Protocal } from "../utils/Protocal";

export const onGetScoreTeam = (callback) => {
  let ApiRouter = Protocal.manage_team_crud;
  axios
    .get(ApiRouter)
    .then((response) => {
      let resData = response.data.data;
      let callbackObj = {
        status: 200,
        data: resData,
      };
      callback(callbackObj);
    })
    .catch((errRes) => {
      console.log("errRes: ", errRes);
      let callbackObj = {
        status: 400,
      };
      callback(callbackObj);
    });
};

export const onGetScoreTeamById = (apiRequest, callback) => {
  let ApiRouter = Protocal.manage_team_crud + "/" + apiRequest.teamId;
  axios
    .get(ApiRouter)
    .then((response) => {
      let resData = response.data.data;
      let callbackObj = {
        status: 200,
        data: resData,
      };
      callback(callbackObj);
    })
    .catch((errRes) => {
      console.log("errRes: ", errRes);
      let callbackObj = {
        status: 400,
      };
      callback(callbackObj);
    });
};

export const onCreateScoreTeam = (apiRequest, callback) => {
  let ApiRouter = Protocal.manage_team_crud;
  axios
    .post(ApiRouter, apiRequest)
    .then((response) => {
      let resData = response.data.data;
      let callbackObj = {
        status: 200,
        data: resData,
      };
      callback(callbackObj);
    })
    .catch((errRes) => {
      console.log("errRes: ", errRes);
      let callbackObj = {
        status: 400,
      };
      callback(callbackObj);
    });
};

export const onUpdateScoreTeam = (apiRequest, callback) => {
  let ApiRouter = Protocal.manage_team_crud + "/" + apiRequest.teamId;
  axios
    .put(ApiRouter, apiRequest)
    .then((response) => {
      let resData = response.data.data;
      let callbackObj = {
        status: 200,
        data: resData,
      };
      callback(callbackObj);
    })
    .catch((errRes) => {
      console.log("errRes: ", errRes);
      let callbackObj = {
        status: 400,
      };
      callback(callbackObj);
    });
};

export const onDeleteScoreTeamById = (apiRequest, callback) => {
  let ApiRouter = Protocal.manage_team_crud + "/" + apiRequest.teamId;
  axios
    .delete(ApiRouter)
    .then((response) => {
      let resData = response.data.data;
      let callbackObj = {
        status: 200,
        data: resData,
      };
      callback(callbackObj);
    })
    .catch((errRes) => {
      console.log("errRes: ", errRes);
      let callbackObj = {
        status: 400,
      };
      callback(callbackObj);
    });
};
