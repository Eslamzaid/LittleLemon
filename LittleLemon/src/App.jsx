import React, { useEffect, useState } from "react";
import Loading from "./Funct/Loading/Loading";
import Layouts from "./Layouts/Layouts";
import "./App.css";

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

