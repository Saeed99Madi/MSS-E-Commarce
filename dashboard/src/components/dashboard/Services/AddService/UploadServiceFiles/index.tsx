import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Dispatch, SetStateAction } from 'react';

import { IService } from '../../../../../interfaces/IService';

type Props = {
  setNewService: Dispatch<SetStateAction<IService>>;
};

export const UploadServiceFiles = (props: Props) => {
  const { setNewService } = props;

  const handleProductFillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (name === 'cover') {
      setNewService(prev => ({ ...prev, cover: (files as any)[0] }));
    }
  };
  return (
    <Button
      sx={{
        borderRadius: '0.5rem',
        padding: '1rem 0',
        width: '50%',
        background:
          'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
      }}
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Service Cover
      <input
        onChange={handleProductFillsChange}
        hidden
        name="cover"
        accept="image/*"
        type="file"
      />
    </Button>
  );
};
