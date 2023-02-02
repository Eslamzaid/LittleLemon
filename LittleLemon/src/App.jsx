import React, { useEffect, useState } from "react";
import Loading from "./Funct/Loading/Loading";
import Layouts from "./Layouts/Layouts";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  //! The Loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return <>{isLoading ? <Loading /> : <Layouts />}</>;
}

export default App;

//TODO 1- Add responsive to the error-page
//TODO 2- Edit the nav when scrolling , remove the margin from it
