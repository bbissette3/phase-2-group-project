import React from "react";
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";
import FilterWorkouts from "./Components/FilterWorkouts";

function App() {

  
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <FilterWorkouts />
      <Footer />
    </div>
  );
}

export default App;
