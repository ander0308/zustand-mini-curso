import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set((state) => ({ firstName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
});

// type PersonStore = PersonState & Actions // também posso criar uma tipagem assim e colocar no create.

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: "person-storage",
  })
);
