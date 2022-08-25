import * as React from "react";
import Button from "@mui/material/Button";
import ButtonAppBar from "./components/ButtonAppBar";
import BasicSpeedDial from "./components/BasicSpeedDial";
import BasicTable from "./components/Table/BasicTable";

const App = () => {
  const fruit = [
    {
      name: "Banana",
      Calorie: 89,
      Carbohydrate: 23,
      Fat: 0,
      Protain: 1,
      Sodium: 1,
      Sugar: 12
    },
    { 
      name : 'Apple',
      Calorie: 52,
      Carbohydrate: 14,
      Fat: 0,
      Protain: 0,
      Sodium: 1,
      Sugar: 10
},
      {
        name : 'Blueberry',
        Calorie: 52,
        Carbohydrate: 14,
        Fat: 0,
        Protain: 0,
        Sodium: 1,
        Sugar: 10
      }
  ];

  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <BasicTable item={fruit}></BasicTable>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <BasicSpeedDial></BasicSpeedDial>
    </div>
  );
};

export default App;
