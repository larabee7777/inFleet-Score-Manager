/* eslint-disable array-callback-return */
import React from "react";
import { useNavigate } from "react-router-dom"; // 6.0
import swal from "sweetalert";
import { Text, HStack, Box, Image, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { createScoreTeam } from "../Redux/actions/scoreTeamActions";
import * as APIService from "../service/ApiService";
import EditTeamForm from "../Component/EditTeamForm";
import InFleeTLogo from "../assets/inFleeTLogo.png";

function CreateNewTeamPage() {
  const navigate = useNavigate(); // 6.0
  const dispatch = useDispatch();
  const getAllTeamData = useSelector((state) => state.scoreTeams);

  const onCreateNewTeam = (teamInfo) => {
    let sameNameChecker = false;
    getAllTeamData.map((item) => {
      if (item.team_name === teamInfo.team_name) {
        sameNameChecker = true;
      }
    });

    if (sameNameChecker === true) {
      swal("Oops", "This team name already exist.", "error");
    } else {
      let createObj = {
        team_name: teamInfo.team_name,
        team_pl_score: teamInfo.team_pl_score,
        team_gd_score: teamInfo.team_gd_score,
        team_pts_score: teamInfo.team_pts_score,
      };
      APIService.onCreateScoreTeam(createObj, (resTeam) => {
        if (resTeam.status === 200) {
          dispatch(createScoreTeam(resTeam.data));
          navigate("/");
        } else {
          swal("Oops", "Your request is invalid.", "error");
        }
      });
    }
  };

  return (
    <Box>
      <HStack display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button
          background={"transparent"}
          onClick={() => {
            navigate("/");
          }}
        >
          <Image src={InFleeTLogo} height={"100%"} />
        </Button>
      </HStack>

      <HStack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        background={"blue.500"}
        paddingRight={"28px"}
        paddingLeft={"28px"}
      >
        <Text textAlign={"center"} fontSize={"28px"} color={"white.700"}>
          Premier Soccer League 2021/2022
        </Text>
      </HStack>

      <EditTeamForm
        currentTeamId={0}
        totalTeams={getAllTeamData}
        buttonText={"Create"}
        onClickBtn={onCreateNewTeam}
      />
    </Box>
  );
}

export default CreateNewTeamPage;
