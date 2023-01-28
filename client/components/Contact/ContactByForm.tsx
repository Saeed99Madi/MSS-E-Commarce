import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

import { useForm } from '../../hooks/useForm';

type Props = {
  hoverForm: boolean;
  SetHoverForm: Function;
};
const initialState = {
  name: '',
  email: '',
  subjectTitle: '',
  subject: '',
};

const subjects = [
  {
    value: 'subject1',
    label: 'subject1',
  },
  {
    value: 'subject2',
    label: 'subject2',
  },
  {
    value: 'subject3',
    label: 'subject3',
  },
  {
    value: 'subject4',
    label: 'subject4',
  },
];

const ContactByForm = ({ hoverForm, SetHoverForm }: Props) => {
  const { values, onChange, setValues } = useForm(initialState);
  const [error, setError] = useState<boolean>(false);

  const handelSubmitBtn = () => {
    if (
      !values.name ||
      !values.email ||
      !values.subject ||
      !values.subjectTitle
    ) {
      console.log('something went wrong');
      toast.error('you must fill out all fields');
      setError(true);
    } else {
      setError(false);
      console.log('clicked');
      console.log(values);
      setValues({ ...initialState });
    }
  };

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
            setValues({ ...initialState });
          }}
        />
        <InputsWrapper>
          <CustomTextField
            id="full-name"
            name="name"
            label="Full Name"
            required
            onChange={e => {
              onChange(e);
              setError(false);
            }}
            value={`${values.name}`}
          />
          <CustomTextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            required
            onChange={e => {
              onChange(e);
              setError(false);
            }}
            value={`${values.email}`}
          />
          <CustomTextField
            id="outlined-required"
            name="subjectTitle"
            label="Select Subject"
            select
            required
            defaultValue="subject"
            onChange={e => {
              onChange(e);
              setError(false);
            }}
            value={`${values.subjectTitle}`}
          >
            {subjects.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
          <CustomTextField
            placeholder="Subject"
            name="subject"
            multiline
            minRows={6}
            maxRows={8}
            required
            onChange={e => {
              onChange(e);
              setError(false);
            }}
            value={`${values.subject}`}
          />

          {hoverForm && <SubmitBtn onClick={handelSubmitBtn}>Submit</SubmitBtn>}
        </InputsWrapper>
      </FormSection>
      <ToastContainer />
    </ContactFormSection>
  );
};

export default ContactByForm;
