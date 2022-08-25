import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ButtonAppBar from "./ButtonAppBar";
import BasicTable from "../components/Table/BasicTable";
import { Button } from "@mui/material";
import BasicSpeedDial from "../components/BasicSpeedDial";
import OpenIconSpeedDial from "../components/BasicSpeedDial";

const fruit = [
  {
    name: "Banana",
    calories: 89,
    carbs: 23,
    fat: 0,
    protain: 1,
    sugar: 12,
  },
  {
    name: "Apple",
    calories: 52,
    carbs: 14,
    fat: 0,
    protain: 0,
    sugar: 10,
  },
  {
    name: "Blueberry",
    calories: 52,
    carbs: 14,
    fat: 0,
    protain: 0,
    sugar: 10,
  },
];

const SimpleContainer = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "white", height: "100%", width: "100%" }}>
          <ButtonAppBar/>
          <BasicTable items={fruit}></BasicTable>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <OpenIconSpeedDial/>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SimpleContainer;
