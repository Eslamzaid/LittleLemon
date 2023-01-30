import React, { useEffect, useState } from "react";
import Loading from "./Funct/Loading/Loading";
import Header from './Layouts/Header/Header'
import "./App.css";

function App() {
  //! The Loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return <>{isLoading ? <Loading /> : <Header/>}</>;
}

export default App;
