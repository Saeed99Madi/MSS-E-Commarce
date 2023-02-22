import { useEffect, useState } from 'react';
import { IProduct } from '../../../interfaces/IProduct';
import {
  ProductImagesWrapper,
  ImageSkeleton,
  ImagesList,
  ImagesWrapper,
  SmallImagesWrapper,
} from '../components.styled';

type IProductgallery = {
  id: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};
// const data: any = [];
const ProductImages = ({ product }: { product: IProduct }) => {
  const [imageLink, setImageLink] = useState<string>('');
  const handleChangeImage = (event: React.SyntheticEvent, image: string) => {
    setImageLink(image);
  };
  useEffect(() => {
    console.log(product, ' form product images ');

    if (!product.cover) {
      console.log('product cover not ger');

      return;
    }
    setImageLink(product.cover);
  }, [product]);
  useEffect(() => {
    console.log(imageLink);
  }, [imageLink]);
  return (
    <ProductImagesWrapper>
      <ImagesWrapper image={imageLink}>
        {imageLink === '' && (
          <ImageSkeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="100%"
            sm={false}
          />
        )}
      </ImagesWrapper>

      <ImagesList>
        {product.productGallery.length > 0 ? (
          product.productGallery.map((image: IProductgallery) => {
            return (
              <SmallImagesWrapper
                image={image.image}
                sm
                onClick={event => handleChangeImage(event, image.image)}
              />
            );
          })
        ) : product.productGallery.length > 0 ? (
          <>
            <SmallImagesWrapper image={undefined} sm>
              <ImageSkeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height="100%"
                sm
              />
            </SmallImagesWrapper>
            <SmallImagesWrapper image={undefined} sm>
              <ImageSkeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height="100%"
                sm
              />
            </SmallImagesWrapper>
            <SmallImagesWrapper image={undefined} sm>
              <ImageSkeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height="100%"
                sm
              />
            </SmallImagesWrapper>
          </>
        ) : null}
      </ImagesList>
    </ProductImagesWrapper>
  );
};

export default ProductImages;
