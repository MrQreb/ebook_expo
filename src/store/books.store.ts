import { create } from 'zustand';

interface BooksState {
    currentPage: number;
    maxPage: number;
    search: string;
    isSearched: boolean;
    numberResults:number;
    setCurrentPage: (page: number) => void;
    setMaxPage: (max: number) => void;
    setSearch: (textSearch: string) => void;
    setIsSearched: (isSearched: boolean) => void; 
    setNumberResults:(numberResults:number) => void;
}

const useBooksStore = create<BooksState>((set) => ({
    currentPage: 1, 
    maxPage: 1, 
    search: '',
    isSearched: false,
    numberResults:0,
    setCurrentPage: (page: number) => set({ currentPage: page }), 
    setMaxPage: (max: number) => set({ maxPage: max }), 
    setSearch: (textSearch: string) => set({ search: textSearch }), 
    setIsSearched: (isSearched: boolean) => set({ isSearched }), 
    setNumberResults: (numberResults: number) => { set({ numberResults })
    }
}));

export default useBooksStore;