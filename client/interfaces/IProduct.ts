export interface IProduct {
  id?: number;
  title: string;
  active: boolean;
  description: string;
  CategoryId: string;
  cover?: string;
  gallery: string[];
  catalog?: string;
  createdAt?: string;
  updatedAt?: string;
  checked?: boolean;
}
