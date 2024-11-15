import React, { useEffect } from "react";
import useFetchStore from "../zustand/useFecthStore";

const DataDisplay = () => {
  const { data, loading, error, fetchData } = useFetchStore();

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Otros usuarios:</h2>
      <button onClick={()=> fetchData()}>Buscar otros usuarios</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
