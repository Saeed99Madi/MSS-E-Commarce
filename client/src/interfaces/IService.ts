export interface IService {
  id?: number;
  title: string;
  active: boolean;
  description: string;
  cover?: File;
  createdAt?: string;
  updatedAt?: string;
  checked?: boolean;
}
