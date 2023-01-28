import { useState, ChangeEvent } from 'react';

type UserData = {
  name: string;
  email: string;
  subjectTitle: string;
  subject: string;
};

export const useForm = (initialState: UserData) => {
  const [values, setValues] = useState<UserData>(initialState);

  // onChang function to store the form data
  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return {
    values,
    onChange,
    setValues,
  };
};
