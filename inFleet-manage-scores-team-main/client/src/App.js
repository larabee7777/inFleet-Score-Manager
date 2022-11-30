import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { setScoreTeam } from "./Redux/actions/scoreTeamActions";
import * as APIService from "./service/ApiService";

import HomePage from "./Page/HomePage";
import CreateNewTeamPage from "./Page/CreateNewTeamPage";
import EditTeamPage from "./Page/EditTeamPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    APIService.onGetScoreTeam((resTeam) => {
      if (resTeam.status === 200) {
        dispatch(setScoreTeam(resTeam.data));
      } else {
        console.log("getting team failed from database.");
      }
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route
        exact
        path="/create"
        name="Create Team Page"
        element={<CreateNewTeamPage />}
      />
      <Route
        exact
        path="/update/:teamId"
        name="Update Team Page"
        element={<EditTeamPage />}
      />
      <Route exact path="/" name="Home Page" element={<HomePage />} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return {
    scoreTeams: state.scoreTeams,
  };
};
export default connect(mapStateToProps)(App);
