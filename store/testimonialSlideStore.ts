import { create } from 'zustand'

interface FilterState {
  ref: any,
  changeRef: (val:any) => void
  activeIndex:number
  changeActiveIndex: (index:number) => void
}

export const useTestimonialSlideStore = create<FilterState>()((set) => ({
  ref: null,
  changeRef: (val) => set((state) => ({ ref: val })),
  activeIndex:0,
  changeActiveIndex: (index) => set((state) => ({activeIndex:index}))
}))