module.exports = function (app) {
  const SoccerTeams = require("../Controllers/SoccerTeams.controller");

  app.post("/api/soccer_teams", SoccerTeams.create);
  app.get("/api/soccer_teams", SoccerTeams.findAll);
  app.get("/api/soccer_teams/:teamId", SoccerTeams.findById);
  app.put("/api/soccer_teams/:teamId", SoccerTeams.update);
  app.delete("/api/soccer_teams/:teamId", SoccerTeams.delete);
};
