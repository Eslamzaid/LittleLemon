import React, { useEffect, useState } from "react";
import Loading from "./Funct/Loading/Loading";
import "./App.css";

function App() {
  //! The Loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return <>{isLoading ? <Loading /> : <h1>Hi</h1>}</>;
}

export default App;
