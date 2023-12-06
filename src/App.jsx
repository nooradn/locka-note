import React from "react";
import PageHeader from "./components/PageHeader.jsx";
import PageFooter from "./components/PageFooter.jsx";
import PageMain from './components/PageMain';

const App = () => {
  return (
    <>
      <PageHeader />
      <PageMain/>
      <PageFooter />
    </>
  );
}

export default App;
