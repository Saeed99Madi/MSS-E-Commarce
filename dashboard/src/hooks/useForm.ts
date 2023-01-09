import { useState, ChangeEvent } from 'react';

type Category = {
  title: any;
  description: string;
  cover?: File;
  parentId?: string;
  id?: string | Blob | undefined;
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

  return {
    onChange,
    values,
  };
};
