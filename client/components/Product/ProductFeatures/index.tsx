import {
  SectionWithoutPadding,
  FeaturesListWrapper,
  RedSpot,
  YellowSpot,
  RectangularImg,
} from '../components.styled';
import ListItem from './ListItem';

interface Features {
  name: string;
  description: string;
}
const data: Features[] = [
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
  {
    name: 'feature name',
    description:
      'We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy We deliver solar products to all countries, Check Our Products & Enjoy .',
  },
];
const ProductFeatures = () => {
  return (
    <SectionWithoutPadding>
      <RedSpot />
      <RectangularImg image="/assets/rec-group.png">
        <YellowSpot />
      </RectangularImg>

      <h2>Product Features</h2>
      <FeaturesListWrapper>
        {data.map((feature: Features) => {
          return <ListItem feature={feature} />;
        })}
      </FeaturesListWrapper>
    </SectionWithoutPadding>
  );
};

export default ProductFeatures;
