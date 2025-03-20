import { create } from 'zustand';

interface PaginationState{
    currentPage:number;
    maxPage:number;
    setCurrentPage:(page:number)=>void;
    setMaxPage:(max:number)=>void;
}

const usePaginationStore = create<PaginationState>((set) => ({
    currentPage: 1, 
    maxPage: 1, 
    setCurrentPage: (page: number) => set({ currentPage: page }), 
    setMaxPage: (max: number) => set({ maxPage: max }), 
  }));
  
  export default usePaginationStore;