
# Zustand con Immer en JavaScript

## Paso 1: Instalar las dependencias
~~~
npm install zustand immer
~~~

## Paso 2: Crear la Store
A continuación, crea una tienda de Zustand utilizando Immer. En este ejemplo, vamos a crear una tienda que maneja un contador.
~~~
// store.js

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
  immer((set) => ({
    count: 0,
    increment: () => set((state) => {
      state.count += 1; // Modificamos el estado de forma inmutable
    }),
    decrement: () => set((state) => {
      state.count -= 1;
    }),
    reset: () => set((state) => {
      state.count = 0;
    }),
  }))
);

export default useStore;
~~~

## Paso 3: Usar la Store en tu Componente

Ahora puedes usar esta tienda en tus componentes. Aquí tienes un ejemplo de cómo hacerlo en un componente funcional de React:
~~~

// Counter.js

import React from 'react';
import useStore from './store';

const Counter = () => {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default Counter;
~~~

## Paso 4: Usar el Componente en tu Aplicación
Finalmente, puedes usar el componente Counter en tu aplicación principal.
~~~
// App.js

import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Aplicación con Zustand e Immer</h1>
      <Counter />
    </div>
  );
};

export default App;
~~~

## Ejemplo Avanzado: Manejo de un Estado de Usuario
En este ejemplo, vamos a crear una tienda que maneje un estado de usuario, incluyendo el nombre y un estado de autenticación.
~~~
// store.js

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
  immer((set) => ({
    user: null,
    isAuthenticated: false,
    login: (name) => set((state) => {
      state.user = { name };
      state.isAuthenticated = true;
    }),
    logout: () => set((state) => {
      state.user = null;
      state.isAuthenticated = false;
    }),
  }))
);

export default useStore;
~~~

### Componente para Manejar el Usuario
Aquí tienes un componente que utiliza la tienda para manejar el inicio de sesión y cierre de sesión.
~~~
// User.js

import React from 'react';
import useStore from './store';

const User = () => {
  const { user, isAuthenticated, login, logout } = useStore();

  const handleLogin = () => {
    const name = prompt("Introduce tu nombre:");
    login(name);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Bienvenido, {user.name}!</h2>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
};

export default User;
~~~

## Ejemplo Asincrónico: Fetch de Datos
Ahora, vamos a añadir un ejemplo que maneje la asincronía. Imaginemos que quieres obtener datos de una API.
~~~
// store.js
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
  immer((set) => ({
    data: [],
    loading: false,
    error: null,
    fetchData: async () => {
      set((state) => {
        state.loading = true;
        state.error = null;
      });

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        set((state) => {
          state.data = result;
          state.loading = false;
        });
      } catch (error) {
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
  }))
);

export default useStore;
~~~

### Componente para Mostrar los Datos
A continuación, un componente que llama a fetchData y muestra el resultado.
~~~
// DataDisplay.js

import React, { useEffect } from 'react';
import useStore from './store';

const DataDisplay = () => {
  const { data, loading, error, fetchData } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Datos:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
~~~

### Usar los Componentes en tu Aplicación
Finalmente, actualiza tu componente App para incluir los nuevos componentes:
~~~
// App.js

import React from 'react';
import Counter from './Counter';
import User from './User';
import DataDisplay from './DataDisplay';

const App = () => {
  return (
    <div>
      <h1>Aplicación con Zustand e Immer</h1>
      <Counter />
      <User />
      <DataDisplay />
    </div>
  );
};

export default App;
~~~
