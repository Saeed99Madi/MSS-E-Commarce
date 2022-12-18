import { useContext, useEffect, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import CloudUpload from '@mui/icons-material/CloudUpload';
import { DrawerHeader, Main } from '../components.styled';

import { DashboardContext } from '../../../context/DashboardContext';

import ApiServices from '../../../servises/ApiService';
import TextInput from './TextInput';
import { ISettings } from '../../../interfaces/ISettings';
import { RowBox } from './components.styled';
import { UploadSettingsFiles } from './uploadFiles';

ApiServices.init();
export const SettingsManagement = () => {
  const { openSideBar } = useContext(DashboardContext);
  const [settings, setSettings] = useState<ISettings>({
    email: '',
    phone: '',
    address: '',
    bio: '',
    phone2: '',
    facebook: '',
    instagram: '',
    linkedIn: '',
    youtupe: '',
    logo: '',
    logo2: '',
  });
  useEffect(() => {
    (async () => {
      const { data } = await ApiServices.get('settings');
      setSettings(data.data);
    })();
  }, []);

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    const data = new FormData();
    if (!settings.logoFile || !settings.logo2File || !settings.phone2) {
      return;
    }
    data.append('logo', settings.logoFile);
    data.append('logo2', settings.logoFile);
    data.append('phone', settings.phone);
    data.append('email', settings.email);
    data.append('phone2', settings.phone2);
    data.append('address', settings.address);
    data.append('facebook', settings.facebook);
    data.append('instagram', settings.instagram);
    data.append('linkedIn', settings.linkedIn);
    data.append('youtupe', settings.youtupe);
    data.append('bio', settings.bio);

    ApiServices.put('settings/update', data);
  };

  return (
    <Main open={openSideBar} sx={{ background: '#141417' }}>
      <DrawerHeader />
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <Typography
          sx={{ color: '#FFFFFF', marginLeft: 'auto', ml: 2, flex: 1 }}
          variant="h4"
          component="div"
        >
          Edit Settings
        </Typography>
        <RowBox>
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="email"
            settings={settings}
            label="Email"
            width="47%"
            isMultiline={false}
            rows={0}
          />
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="phone"
            settings={settings}
            label="Phone"
            width="47%"
            isMultiline={false}
            rows={0}
          />
        </RowBox>
        <RowBox>
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="address"
            settings={settings}
            label="Address"
            width="100%"
            isMultiline={false}
            rows={0}
          />
        </RowBox>
        <RowBox>
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="instagram"
            settings={settings}
            label="Instagram Link"
            width="47%"
            isMultiline={false}
            rows={0}
          />
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="facebook"
            settings={settings}
            label="Facebook Link"
            width="47%"
            isMultiline={false}
            rows={0}
          />
        </RowBox>

        <RowBox>
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="youtupe"
            settings={settings}
            label="Youtupe Link"
            width="47%"
            isMultiline={false}
            rows={0}
          />
          <TextInput
            handleSettingsChange={handleSettingsChange}
            name="linkedIn"
            settings={settings}
            label="LinkedIn Link"
            width="47%"
            isMultiline={false}
            rows={0}
          />
        </RowBox>
        <RowBox>
          <TextInput
            name="bio"
            key="Bio Description"
            handleSettingsChange={handleSettingsChange}
            settings={settings}
            label="Bio Description"
            width="100%"
            isMultiline
            rows={4}
          />
        </RowBox>
        <RowBox>
          <UploadSettingsFiles settings={settings} setSettings={setSettings} />
        </RowBox>
        <RowBox sx={{ justifyContent: 'center' }}>
          <Button
            sx={{
              borderRadius: '0.5rem',
              padding: '1rem 0',
              width: '30%',
              background: '#E52535',
            }}
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
            onClick={handleSaveSettings}
          >
            Save
          </Button>
        </RowBox>
      </Box>
    </Main>
  );
};
