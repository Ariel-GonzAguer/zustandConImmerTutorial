import React from "react";
import useUserStore from "../zustand/useUserStore";

const User = () => {
  const { user, isAuthenticated, login, logout, isACat } = useUserStore();

  const handleLogin = () => {
    const name = prompt("Introduce tu nombre:");
    login(name);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {isAuthenticated ? (
        <div  style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h2>
            Bienvenido, {user.name}! Su número es {user.number}
          </h2>
          <p>
            Eres un gato: {isACat.boolean ? "si" : "nope"} y tu color es:{" "}
            {isACat.color}
          </p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <>
          <button onClick={handleLogin}>Iniciar sesión</button>
          <p>Eres un gato: {isACat.boolean ? "si" : "nope"}</p>
        </>
      )}
    </div>
  );
};

export default User;
