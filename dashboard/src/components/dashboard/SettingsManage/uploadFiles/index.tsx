import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Dispatch, SetStateAction } from 'react';
import { ISettings } from '../../../../interfaces/ISettings';
import { RowBox } from '../components.styled';

type Props = {
  setSettings: Dispatch<SetStateAction<ISettings>>;
  settings: ISettings;
};

export const UploadSettingsFiles = (props: Props) => {
  const { setSettings, settings } = props;

  const handleSettingsFillsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, files } = e.target;

    if (name === 'logo') {
      setSettings(prev => ({ ...prev, logo: (files as any)[0] }));
    } else if (name === 'logo2') {
      setSettings(prev => ({ ...prev, logo2: (files as any)[0] }));
    }
  };

  return (
    <>
      <RowBox>
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
          Main Logo
          <input
            onChange={handleSettingsFillsChange}
            hidden
            name="logoFile"
            accept="image/*"
            type="file"
          />
        </Button>
        <img
          src={`${process.env.REACT_APP_BASEE_URL}/settings/${settings.logo}`}
          alt="logo"
          style={{
            height: '10rem',
            width: '13rem',
            marginBottom: '1rem',
            alignSelf: 'center',
            borderRadius: '12px',
            boxSizing: 'border-box',
          }}
        />
      </RowBox>
      <RowBox>
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
          Secoundry Logo
          <input
            onChange={handleSettingsFillsChange}
            hidden
            name="logo2File"
            accept="image/*"
            type="file"
          />
        </Button>
        <img
          src={`${process.env.REACT_APP_BASEE_URL}/settings/${settings.logo2}`}
          alt="logo"
          style={{
            height: '10rem',
            width: '13rem',
            marginBottom: '1rem',
            alignSelf: 'center',
            borderRadius: '12px',
            boxSizing: 'border-box',
          }}
        />
      </RowBox>
    </>
  );
};
