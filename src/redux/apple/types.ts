export type AppleItems = {
  title: string;
  color: string;
  price: number;
  imageUrl: string;
  id: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export type SearchAppleParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: string;
};

export interface ApplesSliceState {
  items: AppleItems[];
  status: Status;
}
