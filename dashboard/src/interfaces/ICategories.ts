export interface ICategories {
  id: number;
  title: string;
  description: string;
  cover: string;
  isChild: boolean;
  createdAt: string;
  updatedAt: string;
  parentId: number | null;
}
