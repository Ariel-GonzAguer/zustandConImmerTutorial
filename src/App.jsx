import React from "react";
import Counter from "./components/Counter";
import User from "./components/User";
import DataDisplay from "./components/DataDisplay";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Aplicación con Zustand e Immer</h1>
        <Counter />
      </div>
      <span>******************</span>
      <div>
        <User />
      </div>
      <span>******************</span>
      <div>
        <DataDisplay />
      </div>
    </section>
  );
};

export default App;
