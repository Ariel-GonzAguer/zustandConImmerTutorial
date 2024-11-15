import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  immer((set) => ({
    user: {name: '', number: 0},
    isAuthenticated: false,
    isACat: { boolean: false, color: "" },
    login: (name) =>
      set((state) => {
        state.user.name = name ;
        state.user.number = 666;
        state.isAuthenticated = true;
        state.isACat.boolean = true;
        state.isACat.color = "rojo, obvio";
      }),
    logout: () =>
      set((state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isACat.boolean = false; // Opcional: Restablecer estado
        state.isACat.color = null; // Opcional: Restablecer color
      }),
  }))
);

export default useUserStore;
