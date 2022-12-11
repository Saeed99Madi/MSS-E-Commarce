export interface IProduct {
  id?: number;
  title: string;
  active: boolean;
  description: string;
  CategoryId: string;
  cover?: File;
  gallery: File[];
  catalog?: File;
  createdAt?: string;
  updatedAt?: string;
}
