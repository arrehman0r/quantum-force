import { create } from 'zustand'

interface FilterState {
  filter: string,
  change: (val:string) => void
}

export const useFilterStore = create<FilterState>()((set) => ({
  filter: 'All',
  change: (val) => set((state) => ({ filter: val })),
}))