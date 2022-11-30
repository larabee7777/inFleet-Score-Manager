const db = require("../config/db.config");
const SoccerTeams = db.SoccerTeams;

// Create a team
exports.create = (req, res) => {
  // Save to MySQL database
  SoccerTeams.create({
    team_name: req.body.team_name,
    team_pl_score: parseInt(req.body.team_pl_score),
    team_gd_score: parseInt(req.body.team_gd_score),
    team_pts_score: parseInt(req.body.team_pts_score),
    team_status: req.body.team_status,
  })
    .then((result) => {
      // Send created response to client
      res.status(200).send({
        type: "SUCCESS",
        message: "create success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).send({
        type: "INCORRECT_REQUEST",
        message: "request failed",
        data: err,
      });
    });
};

// FETCH all teams
exports.findAll = (req, res) => {
  SoccerTeams.findAll({
    order: [
      ["team_pts_score", "DESC"],
      ["team_gd_score", "DESC"],
      ["team_pl_score", "DESC"],
    ],
  })
    .then((result) => {
      res.status(200).send({
        type: "SUCCESS",
        message: "get success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).send({
        type: "INCORRECT_REQUEST",
        message: "request failed",
        data: err,
      });
    });
};

// Find a team by Id
exports.findById = (req, res) => {
  SoccerTeams.findByPk(req.params.teamId)
    .then((result) => {
      res.status(200).send({
        type: "SUCCESS",
        message: "get success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).send({
        type: "INCORRECT_REQUEST",
        message: "request failed",
        data: err,
      });
    });
};

// Update a team
exports.update = (req, res) => {
  const forceId = req.params.teamId;
  SoccerTeams.update(
    {
      team_name: req.body.team_name,
      team_pl_score: parseInt(req.body.team_pl_score),
      team_gd_score: parseInt(req.body.team_gd_score),
      team_pts_score: parseInt(req.body.team_pts_score),
      team_status: req.body.team_status,
    },
    { where: { teamId: forceId } }
  )
    .then(() => {
      res.status(200).send({
        type: "SUCCESS",
        message: "updated successfully  with id = " + forceId,
      });
    })
    .catch((err) => {
      res.status(400).send({
        type: "INCORRECT_REQUEST",
        message: "request failed",
        data: err,
      });
    });
};

// Delete a team by Id
exports.delete = (req, res) => {
  const id = req.params.teamId;
  SoccerTeams.destroy({
    where: { teamId: id },
  })
    .then(() => {
      res.status(200).send({
        type: "SUCCESS",
        message: "deleted successfully  with id = " + id,
      });
    })
    .catch((err) => {
      res.status(400).send({
        type: "INCORRECT_REQUEST",
        message: "request failed",
        data: err,
      });
    });
};
