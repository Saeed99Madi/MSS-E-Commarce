type IProductgallery = {
  id: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};
type Attripute = {
  id: string;
  title: string;
  description: string;
  productID?: number;
  createdAt?: string;
  updatedAt?: string;
};
export interface IProduct {
  id?: number;
  title: string;
  active: boolean;
  description: string;
  CategoryId: string;
  cover?: File;
  gallery: File[];
  ProductAttriputes?: Attripute[];
  productGallery?: IProductgallery[];
  catalog?: File;
  createdAt?: string;
  updatedAt?: string;
  checked?: boolean;
}
