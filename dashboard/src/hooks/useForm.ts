import { useState, ChangeEvent } from 'react';

type Category = {
  title: string;
  description: string;
  cover?: File;
  parentId: string;
};

export const useForm = (initialState: Category) => {
  const [values, setValues] = useState<Category>(initialState);

  // onChang function to store the form data
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    //  check if the coming data is an id for parent category by checking if the data able to convert to number
    if (+event.target.value) {
      setValues({ ...values, parentId: event.target.value });
    } else if (event.target.name === 'cover') {
      setValues({ ...values, cover: (files as any)[0] });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  //  onSubmit function to send the data to the backend
  // const onSubmit = async (event: ChangeEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   await callback;
  // };
  // return values
  return {
    onChange,
    // onSubmit,
    values,
  };
};
