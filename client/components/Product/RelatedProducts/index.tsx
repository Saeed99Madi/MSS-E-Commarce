/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowsLeft, ArrowsRight } from './Arrows';
import {
  RelatedProductWrapper,
  ProductsCardWrapper,
} from '../components.styled';
import ProductCard from './ProductCard';
import { IProduct } from '../../../interfaces/IProduct';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <ArrowsLeft />,
  prevArrow: <ArrowsRight />,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RelatedProducts = ({ product }: { product: IProduct }) => {
  return (
    <RelatedProductWrapper>
      <h2>Related products</h2>
      <ProductsCardWrapper>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </ProductsCardWrapper>
    </RelatedProductWrapper>
  );
};

export default RelatedProducts;
