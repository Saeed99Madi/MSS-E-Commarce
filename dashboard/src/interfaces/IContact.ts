export interface IContact {
  id: number;
  name: string;
  email: string;
  content: string;
  shortContent?: string;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}
