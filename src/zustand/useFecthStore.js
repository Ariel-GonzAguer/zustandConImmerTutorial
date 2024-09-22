import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useFetchStore = create(
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
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
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

export default useFetchStore;
