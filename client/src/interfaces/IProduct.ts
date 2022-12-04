export interface IProduct {
  id: number;
  title: string;
  active: boolean;
  description: string;
  categoryId: number;
  cover: string;
  catalog?: string;
  createdAt: string;
  updatedAt: string;
}
