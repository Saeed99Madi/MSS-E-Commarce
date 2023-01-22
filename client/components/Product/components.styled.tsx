import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
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
    padding: '124px 16px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '4rem',
  }),
  `
  @media ${device.tablet} {
    flex-direction: row;
    padding: 124px 144px;
  }
  `,
);

const ProductDetailsWrapper = styled('div')(() => ({
  flex: '1 1 400px',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
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
};
