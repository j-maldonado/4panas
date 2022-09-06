import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Cover from "./components/cover/Cover";
import Footerc from "./components/footer/footer";
import Flwhatsappc from "./components/Flwhatsapp/Flwhatsapp";
import './App.css'




function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Cover></Cover>
    <Flwhatsappc></Flwhatsappc>
    <Footerc></Footerc>
    </div>
  );
}

export default App;
