import { create } from "zustand";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

// type PersonStore = PersonState & Actions // também posso criar uma tipagem assim e colocar no create.

export const usePersonStore = create<PersonState & Actions>()((set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set((state) => ({ firstName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
}));
