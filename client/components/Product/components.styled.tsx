import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import { device } from '../../utils/devices';

const GlobalStyle = styled('div')`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600&family=Roboto:wght@300&display=swap');
  font-family: 'Cairo', sans-serif;
  & h1 {
    color: #1f1f22;
    font-weight: 700;
    font-size: 48px;
    line-height: 103.5%;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
  }
  & h2 {
    color: #f6cd06;
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 103.5%;
    text-align: center;
    letter-spacing: 0.02em;
  }

  & p {
    max-width: 466px;
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 170%;
    letter-spacing: 0.02em;
    color: #141417;
  }
`;

const SectionWithPadding = styled('div')(
  () => ({
    padding: '62px 16px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '4rem',
  }),
  `
  @media ${device.tablet} {
    flex-direction: row;
    padding-top: 124px;
  }
  `,
);

const ProductDetailsWrapper = styled('div')(() => ({
  flex: '1 1 200px',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
}));

const CategoryTag = styled('div')(() => ({
  color: '#fff',
  background: 'linear-gradient(90deg, #F6CD06 0%, #EFB92A 100%)',
  padding: '8px 16px',
  width: '100px',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '14px',
  marginBottom: '-4px',
}));

const ButtonsWrapper = styled('div')(
  () => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '0px',
  }),
  `
@media ${device.tablet} {
  flex-direction: row;
}
`,
);

const DownloadButton = styled(Button)(
  () => ({
    color: '#fff',
    background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
    padding: '16px 18px',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '14px',
  }),
  `
@media ${device.tablet} {
width: 270px;
}
`,
);

const ContactButton = styled(Button)(
  () => ({
    color: '#1F1F22',
    border: '2px solid #1F1F22',
    padding: '12px 32px',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '14px',
  }),
  `
@media ${device.tablet} {
width: 255px;
}
`,
);

const ProductImagesWrapper = styled('div')(
  () => ({
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
    overflow: 'hidden',
  }),
  `
@media ${device.tablet} {
  flex-direction: row;

}
`,
);

const ImagesWrapper = styled('div')(
  ({ image }: { image: string | undefined }) => ({
    border: '8px solid #F1F1F1',
    borderRadius: '40px',
    flex: '1 1 300px',
    padding: '15px !important',
    backgroundImage: `url(${image})`,
    backgroundPosition: '50% !important',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
  }),
);

const SmallImagesWrapper = styled('div')(
  ({ image }: { image: string | undefined; sm: boolean }) => ({
    minWidth: '74px',
    minHeight: '74px',
    border: '8px solid #F1F1F1',
    borderRadius: '14px',
    flex: '1 1 74px',
    padding: '6px',
    cursor: 'pointer',
    backgroundImage: `url(${image})`,
    backgroundPosition: '50% !important',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
  }),
  `
@media ${device.tablet} {
  max-height: 74px;
  flex-direction: column;
}
`,
);

const ImageSkeleton = styled(Skeleton)(({ sm }: { sm: boolean }) => ({
  borderRadius: `${sm ? '12px' : '20px'}`,
  minWidth: '100%',
}));

const ImagesList = styled('div')(
  () => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    minHeight: '74px',
    maxWidth: '320px',
    overflowX: 'scroll',
    overflowY: 'hidden',
    margin: 'auto',
  }),
  `
@media ${device.tablet} {
    overflow-x: hidden; 
    overflow-Y: scroll;
    padding-right: 10px;
    flex-direction: column;
    max-height: 460px;
    justify-content: space-between;
    ::-webkit-scrollbar {
      width: 0.5rem;
      }
      ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      ::-webkit-scrollbar-thumb {
      background-color: #f6cd06;
      outline: 1px solid #f6cd06;
      border-radius: 8px;
      }
}
`,
);

// product feature
const SectionWithoutPadding = styled('div')(
  () => ({
    background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
    minHeight: '90vh',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  }),
  `
  & h2 {
    padding-top: 56px;
    padding-bottom: 44px;
    position: absolute;
    z-index: 1000;
    width: 100%;
  }
  @media ${device.tablet} {
    margin-top: 60px;
    h2 {
      position:static;
    }
  }
  `,
);

const RedSpot = styled('div')(
  () => ({
    width: '200px',
    height: '200px',
    background:
      'linear-gradient(90deg, rgba(85,38,44,1) 0%, rgba(77,37,43,1) 35%, rgba(44,31,35,1) 100%);',
    position: 'absolute',
    borderRadius: '50%',
    marginLeft: '-30px',
    marginTop: '-30px',
    overflow: 'hidden',
    filter: 'blur(30px)',
    zIndex: '1',
  }),
  `
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
    margin-top: -50px;
    margin-left: -50px;
  }
`,
);

const YellowSpot = styled('div')(
  () => ({
    top: '100px',
    left: '200px',
    width: '200px',
    height: '200px',
    background:
      'linear-gradient(90deg, rgba(53,46,23,1) 0%, rgba(65,55,24,1) 35%, rgba(34,31,25,1) 100%)',
    position: 'absolute',
    borderRadius: '50%',
    overflow: 'hidden',
    filter: 'blur(30px)',
  }),
  `
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
    margin-bottom: -50px;
    margin-right: -50px;
  }
`,
);
const RectangularImg = styled('div')(
  ({ image }: { image: string | undefined }) => ({
    width: '500px',
    height: '400px',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '-150px',
    right: '-200px',
    filter: 'blur(1px)',
    zIndex: '1000',
  }),
  `
@media ${device.tablet} {
  width: 400px;
  height: 300px;
  bottom: 0px;
  right: 0px;
}

`,
);

const FeaturesListWrapper = styled('div')(
  () => ({
    margin: '180px 0',
    marginBottom: '130px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '50px',
    position: 'relative',
    zIndex: '10000',
  }),
  `
  nav:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-top: 2px solid #424244;
  }
  nav:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom: 2px solid #424244;
  }
@media ${device.tablet} {
  margin-top: 0px;
}
`,
);

const FeaturesList = styled(List)(
  () => ({
    width: '90%',
    background:
      'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
    color: '#fff',
    borderTop: '1px solid #424244',
  }),
  `
@media ${device.tablet} {
  width: 60%;
}
`,
);

// related product
const RelatedProductWrapper = styled(SectionWithPadding)(
  () => ({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px 16px',
    gap: '2rem',
  }),
  `
  & h2 {
    color: #18181B;

  }
  @media ${device.tablet} {
    flex-direction: column;
   }
  `,
);

const ProductsCardWrapper = styled('div')(
  () => ({
    justifyContent: 'center',
    maxWidth: '1440px',
    width: '100%',
  }),
  `
@media ${device.tablet} {
 flex-direction: row;
}
`,
);

const ArrowBtn = styled(Button)(({ left }: { left: boolean }) => ({
  backgroundColor: 'rgba(26, 26, 29,0.1)',
  position: 'absolute',
  right: '0rem',
  top: '50%',
  left: left ? '0' : '',
  zIndex: '1000',
  width: '1rem',
  borderRadius: '1rem',
  '&:hover': {
    backgroundColor: 'rgba(26, 26, 29,0.4)',
  },
}));

export {
  GlobalStyle,
  SectionWithPadding,
  ProductDetailsWrapper,
  ProductImagesWrapper,
  CategoryTag,
  DownloadButton,
  ContactButton,
  ButtonsWrapper,
  ImageSkeleton,
  ImagesList,
  ImagesWrapper,
  SmallImagesWrapper,
  SectionWithoutPadding,
  FeaturesListWrapper,
  RedSpot,
  YellowSpot,
  FeaturesList,
  RectangularImg,
  RelatedProductWrapper,
  ProductsCardWrapper,
  ArrowBtn,
};
