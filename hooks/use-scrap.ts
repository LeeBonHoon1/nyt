import { NewsItems } from '@/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ScrapStore {
  scrapItem: NewsItems[];
  scrapHandler: (data: NewsItems) => void;
}

const useScrap = create(
  persist<ScrapStore>((set, get) => ({
    scrapItem: [],
    scrapHandler: (data) => {
      const { scrapItem } = get();
      const isAlreadyScrapped = scrapItem.some((item) => item.web_url === data.web_url);

      if (isAlreadyScrapped) {
        set((state) => ({
          scrapItem: state.scrapItem.filter((item) => item.web_url !== data.web_url),
        }));
      } else {
        set((state) => ({
          scrapItem: [...state.scrapItem, data],
        }));
      }
    },
  }), {
    name: 'scrapItem',
    storage: createJSONStorage(() => localStorage),
  })
);

export default useScrap;
