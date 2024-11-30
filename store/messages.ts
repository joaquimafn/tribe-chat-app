import { create } from "zustand";

import { TMessage } from "@/types/message";

type IMessages = {
  messages: TMessage[];
  updateMessages: (message: TMessage) => void;
};

const useMessages = create<IMessages>((set) => ({
  messages: [],
  updateMessages: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));

export default useMessages;
