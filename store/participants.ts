import { create } from "zustand";

import { TParticipant } from "@/types/message";

type IParticipants = {
  participants: TParticipant[];
  updateParticipants: (participant: TParticipant) => void;
  updateAllParticipants: (participant: TParticipant[]) => void;
};

const useParticipants = create<IParticipants>((set) => ({
  participants: [],
  updateParticipants: (participant) =>
    set((state) => ({ participants: [...state.participants, participant] })),
  updateAllParticipants: (participants) =>
    set((state) => ({ participants: [...participants] })),
}));

export default useParticipants;
