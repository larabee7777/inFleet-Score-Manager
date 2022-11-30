import React from "react";
import { useNavigate } from "react-router-dom"; // 6.0
import swal from "sweetalert";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  HStack,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { deleteScoreTeam } from "../Redux/actions/scoreTeamActions";
import * as APIService from "../service/ApiService";
import InFleeTLogo from "../assets/inFleeTLogo.png";

function HomePage() {
  const navigate = useNavigate(); // 6.0
  const dispatch = useDispatch();
  const getAllTeamData = useSelector((state) => state.scoreTeams);

  const onDeleteTeam = (id, teamUUID) => {
    swal("Are you sure you want to delete this team?", {
      buttons: ["No!", true],
    }).then((willDelete) => {
      if (willDelete) {
        let updateObj = {
          teamId: teamUUID,
        };
        APIService.onDeleteScoreTeamById(updateObj, (resTeam) => {
          if (resTeam.status === 200) {
            swal("Success", "This team has been deleted.");
            dispatch(deleteScoreTeam(id));
          } else {
            swal("Oops", "Your request is invalid.", "error");
          }
        });
      }
    });
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
        justifyContent={"space-between"}
        alignItems={"center"}
        background={"blue.500"}
        paddingRight={"28px"}
        paddingLeft={"28px"}
      >
        <Text>&nbsp;</Text>
        <Text textAlign={"center"} fontSize={"28px"} color={"white.700"}>
          Premier Soccer League 2021/2022
        </Text>

        <Button
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </Button>
      </HStack>

      {getAllTeamData.length > 0 ? (
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>INFLEET INTERNATIONAL</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Team</Th>
                <Th>Pl</Th>
                <Th>GD</Th>
                <Th>Pts</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {getAllTeamData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{item.team_name}</Td>
                    <Td>{item.team_pl_score}</Td>
                    <Td>{item.team_gd_score}</Td>
                    <Td>{item.team_pts_score}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          navigate(`/update/${item.teamId}`);
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        marginLeft={"12px"}
                        onClick={() => {
                          onDeleteTeam(index, item.teamId);
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <HStack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          background={"gray.800"}
          paddingRight={"28px"}
          paddingLeft={"28px"}
          paddingTop={"60px"}
        >
          <Text textAlign={"center"} fontSize={"28px"} color={"white.700"}>
            Team data doesn't exist yet.
          </Text>
        </HStack>
      )}
    </Box>
  );
}

export default HomePage;
