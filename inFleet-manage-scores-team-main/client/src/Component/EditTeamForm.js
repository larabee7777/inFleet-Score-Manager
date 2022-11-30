import React, { useEffect, useState } from "react";
import { Text, HStack, Box, Button, VStack, Input } from "@chakra-ui/react";
import swal from "sweetalert";

function EditTeamForm(props) {
  const [teamName, setTeamName] = useState("");
  const [teamPLScore, setTeamPLScore] = useState(0);
  const [teamGDScore, setTeamGDScore] = useState(0);
  const [teamPtsScore, setTeamPtsScore] = useState(0);

  useEffect(() => {
    if (props.buttonText === "Update") {
      props.totalTeams.map((item) => {
        if (parseInt(item.teamId) === parseInt(props.currentTeamId)) {
          setTeamName(item.team_name);
          setTeamPLScore(item.team_pl_score);
          setTeamGDScore(item.team_gd_score);
          setTeamPtsScore(item.team_pts_score);
        }
      });
    }
  }, [props.buttonText, props.currentTeamId, props.totalTeams]);

  return (
    <Box>
      <VStack>
        <HStack>
          <Text>Team Name: </Text>
          <Input
            placeholder="input your team name"
            value={teamName}
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
          />
        </HStack>
      </VStack>

      <VStack>
        <HStack>
          <Text>Team PL Score: </Text>
          <Input
            type={"number"}
            placeholder="input your pl score"
            value={teamPLScore}
            onChange={(e) => {
              setTeamPLScore(e.target.value);
            }}
          />
        </HStack>
      </VStack>

      <VStack>
        <HStack>
          <Text>Team GD Score: </Text>
          <Input
            type={"number"}
            placeholder="input your gd score"
            value={teamGDScore}
            onChange={(e) => {
              setTeamGDScore(e.target.value);
            }}
          />
        </HStack>
      </VStack>

      <VStack>
        <HStack>
          <Text>Team Pts Score: </Text>
          <Input
            type={"number"}
            placeholder="input your pts score"
            value={teamPtsScore}
            onChange={(e) => {
              setTeamPtsScore(e.target.value);
            }}
          />
        </HStack>
      </VStack>

      <HStack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingRight={"28px"}
        paddingLeft={"28px"}
        marginTop={"28px"}
      >
        <Button
          onClick={() => {
            if (teamName === "") {
              swal("Oops", "team name can't be blank.", "error");
            }else  if (teamPtsScore > 16) {
              swal("Oops", "team Pts Score can't be more than 16.", "error");
            }else  if (teamPLScore > 30) {
              swal("Oops", "team Pl Score can't be more than 30.", "error");
            } else {
              let createObj = {
                team_name: teamName,
                team_pl_score: teamPLScore,
                team_gd_score: teamGDScore,
                team_pts_score: teamPtsScore,
              };
              props.onClickBtn(createObj);
            }
          }}
        >
          {props.buttonText}
        </Button>
      </HStack>
    </Box>
  );
}

export default EditTeamForm;
