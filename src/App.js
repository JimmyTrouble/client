import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then((response) =>
      response.json().then((data) => {
        setBackendData(data);
      })
    );
  }, []);

  return (
    <div className="container">
      {console.log(backendData)}
      {typeof backendData.users === "undefined" ? (
        <p>loading</p>
      ) : (
        backendData.users.map((item, i) => <p key={i}>{item}</p>)
      )}
    </div>
  );
}

export default App;
