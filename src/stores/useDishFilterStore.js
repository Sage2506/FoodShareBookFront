import create from 'zustand';

const useDishFilterStore = create((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm) => set({ searchTerm })
}));

export default useDishFilterStore;