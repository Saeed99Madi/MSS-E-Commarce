import {
  CardButton,
  CardHdParagraph,
  CardParagraph,
  CenterdFlexContainer,
  CustomButtonCheck,
  CustomButtonWho,
  HeadContainer,
  HeadParagraph,
  HeadText,
  Imagecustom,
  ServiceCard,
} from './components.styled';

const HeadSection = () => {
  return (
    <HeadContainer>
      <HeadText>Mooie Sterk Solar</HeadText>
      <HeadParagraph>
        We deliver Solar products to all Countries, Check Our Products & Enjoy
      </HeadParagraph>
      <CenterdFlexContainer>
        <CustomButtonCheck>Check Products</CustomButtonCheck>
        <CustomButtonWho>Who We Are</CustomButtonWho>
      </CenterdFlexContainer>
      <ServiceCard>
        <Imagecustom src="/assets/map.png" alt="map" />
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardParagraph>Mooie Sterk Solar</CardParagraph>
          <CardHdParagraph>
            We deliver Solar products to all Countries, Check Our Products &
            Enjoy
          </CardHdParagraph>
        </div>
        <CardButton>Check Products</CardButton>
      </ServiceCard>
    </HeadContainer>
  );
};

export default HeadSection;
