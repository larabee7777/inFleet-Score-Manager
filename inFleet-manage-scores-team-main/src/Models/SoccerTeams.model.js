const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const SoccerTeams = sequelize.define("soccer_teams", {
    teamId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    team_name: {
      type: DataTypes.STRING,
    },
    team_pl_score: {
      type: DataTypes.INTEGER,
    },
    team_gd_score: {
      type: DataTypes.INTEGER,
    },
    team_pts_score: {
      type: DataTypes.INTEGER,
    },
    team_status: {
      type: DataTypes.STRING,
    },
  });

  return SoccerTeams;
};
