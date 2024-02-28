import { create } from "zustand";

interface IBears {
  id: number;
  name: string;
}

interface IBearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: IBears[];

  computed: {
    totalBears: number;
  };

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
  addBears: () => void;
  clearBears: () => void;
}

export const useBearStore = create<IBearsState>()((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  bears: [{ id: 1, name: "Oso #1" }],

  computed: {
    get totalBears() {
      return (
        get().blackBears +
        get().polarBears +
        get().pandaBears +
        get().bears.length
      );
    },
  },

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
  addBears: () =>
    set((state) => ({
      bears: [
        // ...get().bears, // Assim também funciona
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` },
      ],
    })),
  clearBears: () => set({ bears: [] }),
}));
