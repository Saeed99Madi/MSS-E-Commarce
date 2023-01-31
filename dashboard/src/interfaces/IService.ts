export interface IService {
  id?: number;
  title: string;
  active: boolean;
  description: string;
  cover?: File;
  coverEdit?: File;
  createdAt?: string;
  updatedAt?: string;
  checked?: boolean;
}
