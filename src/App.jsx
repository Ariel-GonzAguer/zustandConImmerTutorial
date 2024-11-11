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
        height: "100vh",
        justifyContent: "space-evenly",
      }}
    >
      <h1>Aplicación con Zustand e Immer</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Contador</h2>
        <Counter />
      </div>
      <span>******************</span>
      <h2>Login Usuario</h2>
      <div>
        <User />
      </div>
      <span>******************</span>
      <div>
        <h2>Fetch</h2>
        <DataDisplay />
      </div>
    </section>
  );
};

export default App;
