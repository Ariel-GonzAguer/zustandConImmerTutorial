import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  immer((set) => ({
    user: null,
    isAuthenticated: false,
    isACat: { boolean: false, color: "red" },
    login: (name) =>
      set((state) => {
        state.user = { name };
        state.isAuthenticated = true;
        state.isACat.boolean = true;
        state.isACat.color = "red";
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
