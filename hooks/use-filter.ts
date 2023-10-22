import { FilterItem } from '@/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FilterStore {
  filterData: FilterItem;
  addFilterTag: (data: FilterItem) => void;
}

const useFilter = create(
  persist<FilterStore>((set, get) => ({
    filterData: {
      headline: "",
      date: "",
      filterTags: [],
    },
    addFilterTag: (data) => {
      set((state) => ({
        filterData: {
          headline: data.headline,
          date: data.date,
          filterTags: data.filterTags,
        },
      }));
    },
  }), {
    name: 'filterData',
    storage: createJSONStorage(() => localStorage),
  })
);

export default useFilter;
