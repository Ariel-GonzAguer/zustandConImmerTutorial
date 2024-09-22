import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useCountStore = create(
  immer((set) => ({
    count: 0,
    increment: () =>
      set((state) => {
        state.count += 1; // Modificamos el estado de forma inmutable
      }),
    decrement: () =>
      set((state) => {
        state.count -= 1;
      }),
    reset: () =>
      set((state) => {
        state.count = 0;
      }),
  }))
);

export default useCountStore;
