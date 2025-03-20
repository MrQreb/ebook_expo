import { create } from 'zustand';

interface PaginationState {
    currentPage: number;
    maxPage: number;
    search: string;
    isSearched: boolean;
    setCurrentPage: (page: number) => void;
    setMaxPage: (max: number) => void;
    setSearch: (textSearch: string) => void;
    setIsSearched: (isSearched: boolean) => void; // Corregido el nombre del parámetro
}

const usePaginationStore = create<PaginationState>((set) => ({
    currentPage: 1, 
    maxPage: 1, 
    search: '',
    isSearched: false,
    setCurrentPage: (page: number) => set({ currentPage: page }), 
    setMaxPage: (max: number) => set({ maxPage: max }), 
    setSearch: (textSearch: string) => set({ search: textSearch }), 
    setIsSearched: (isSearched: boolean) => set({ isSearched }), 
}));

export default usePaginationStore;