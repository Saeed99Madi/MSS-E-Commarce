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
  CategoryId: number;
  cover?: string;
  ProductAttriputes: Attripute[];
  productGallery: IProductgallery[];
  gallery: string[];
  catalog?: string;
  createdAt?: string;
  updatedAt?: string;
  checked?: boolean;
}
