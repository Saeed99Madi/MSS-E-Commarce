export interface ICategories {
  id?: number | undefined | string;
  title?: string | Blob | undefined;
  description?: string | Blob;
  cover?: string | Blob;
  isChild?: boolean;
  createdAt?: string;
  updatedAt?: string;
  parentId?: number | null;
}
