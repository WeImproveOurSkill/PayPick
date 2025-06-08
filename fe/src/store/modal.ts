import {create} from "zustand";

interface detailState {
  detailShow: boolean;
  detailModal: (state:boolean) => void;
}

export const useDetailStore = create<detailState>((set) => ({
  detailShow: false,
  detailModal: (state) => set(() => ({ detailShow: state })),
}));


interface rerenderState {
  rerenderShow: boolean;
  rerenderModal: (state:boolean) => void;
}

export const useRerenderStore = create<rerenderState>((set) => ({
  rerenderShow: false,
  rerenderModal: (state) => set(() => ({ rerenderShow: state })),
}));


interface recentlyStoreState {
  recentlyShow: boolean;
  isClosing: boolean;
  recentlyModal: (state: boolean) => void;
  setClosing: (state: boolean) => void;
}

export const useRecentlyStore = create<recentlyStoreState>((set) => ({
  recentlyShow: false,
  isClosing: false,
  recentlyModal: (state) => set(() => ({ recentlyShow: state })),
  setClosing: (state) => set(() => ({ isClosing: state })),
}));