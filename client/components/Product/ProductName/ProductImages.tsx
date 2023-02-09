import { useState } from 'react';
import {
  ProductImagesWrapper,
  ImageSkeleton,
  ImagesList,
  ImagesWrapper,
  SmallImagesWrapper,
} from '../components.styled';

const data = [
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',

  'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
];

// const data: any = [];
const ProductImages = () => {
  const [imageLink, setImageLink] = useState<string | undefined>(data[0]);
  const handleChangeImage = (
    event: React.SyntheticEvent,
    image: string | undefined,
  ) => {
    setImageLink(image);
  };
  return (
    <ProductImagesWrapper>
      <ImagesWrapper image={imageLink}>
        {!data.length && (
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
        {data.length ? (
          data.map((image: string | undefined) => {
            return (
              <SmallImagesWrapper
                image={image}
                sm
                onClick={event => handleChangeImage(event, image)}
              />
            );
          })
        ) : (
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
        )}
      </ImagesList>
    </ProductImagesWrapper>
  );
};

export default ProductImages;
