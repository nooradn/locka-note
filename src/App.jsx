import React from "react";
import ButtonUsage from "./components/Mui";

function App() {
  return (
    <>
      {/* <Greet /> */}
      <ButtonUsage name='Satu' style='contained'/>
      <ButtonUsage name='Dua'/>
      <ButtonUsage name='Tiga'/>
      <ButtonUsage name='Empat' stateColor={'success'} style='contained'/>
      <ButtonUsage name='Lima'/>
      <ButtonUsage name='Enam' stateColor={'error'} style='contained'/>
      <ButtonUsage name='Tujuh'/>
    </>
  );
}

function Greet() {
  return <p>Test </p>;
}

export default App;
