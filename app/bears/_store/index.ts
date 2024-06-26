import { createStore } from "zustand";
interface states {
    bears : number;
}

export const useBearsStore = createStore<states>(() => ({
    bears: 0,
}))