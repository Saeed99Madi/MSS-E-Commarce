import CloseIcon from '@mui/icons-material/Close';
import {
  ContactFormSection,
  FormWrapper,
  FormSection,
  SubmitBtn,
  Spot,
  ImageIcon,
  ImageWrapper,
  CustomTypography,
  HeaderTypography,
  CustomTextField,
  InputsWrapper,
} from './components.styled';

type Props = {
  hoverForm: boolean;
  SetHoverForm: Function;
};

const ContactByForm = ({ hoverForm, SetHoverForm }: Props) => {
  return (
    <ContactFormSection hoverForm={hoverForm}>
      <FormWrapper hoverForm={hoverForm}>
        <div>
          <ImageWrapper>
            <Spot hoverForm={hoverForm} />
            <ImageIcon src="/assets/form.png" alt="contact" />
          </ImageWrapper>
          <CustomTypography>Contact Us</CustomTypography>
          <HeaderTypography>
            Contact By <span>FORM</span>
          </HeaderTypography>
        </div>
        {!hoverForm && (
          <SubmitBtn
            onMouseEnter={() => {
              SetHoverForm(true);
            }}
          >
            Submit Form
          </SubmitBtn>
        )}
      </FormWrapper>
      <FormSection hoverForm={hoverForm}>
        <CloseIcon
          sx={{ color: '#fff', alignSelf: 'flex-end', cursor: 'pointer' }}
          onClick={() => {
            SetHoverForm(false);
          }}
        />
        <InputsWrapper>
          <CustomTextField id="full-name" label="Full Name" />
          <CustomTextField id="email" type="email" label="Email Address" />
          <CustomTextField
            id="outlined-required"
            label="Select Subject"
            select
          />
          <CustomTextField
            placeholder="Subject"
            multiline
            rows={6}
            maxRows={8}
          />
          {hoverForm && (
            <SubmitBtn
              onClick={() => {
                console.log('clicked');
              }}
            >
              Submit Form
            </SubmitBtn>
          )}
        </InputsWrapper>
      </FormSection>
    </ContactFormSection>
  );
};

export default ContactByForm;
