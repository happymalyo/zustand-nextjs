// Directory: /app/bears/_store/index.ts
import { create } from 'zustand';

// State types
interface States {
  bears: number,
  increment:  () => void,
  decrement:  () => void,
}

// useBearStore
export const useBearStore = create<States>((set) => ({
  bears: 0,
  increment: () => set((state) => ({ bears: state.bears + 1 })),
  decrement: () => set((state) => ({ bears: state.bears - 1 }))
}));