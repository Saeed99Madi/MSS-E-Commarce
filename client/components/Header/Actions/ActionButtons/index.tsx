/* eslint-disable no-console */
import useTranslation from 'next-translate/useTranslation';
import NativeSelect from '@mui/material/NativeSelect';
import setLanguage from 'next-translate/setLanguage';
import {
  AuthButtonsBox,
  LoginButton,
  SelectLang,
} from '../../components.styled';

export const AuthButtons = () => {
  const { t } = useTranslation('home');
  const handleLanguageClick = (event: any) => {
    console.log(event.target.value);
    const lang = event.target.value;
    setLanguage(lang);
  };
  return (
    <AuthButtonsBox>
      <SelectLang
        disableUnderline
        sx={{ background: '#FFFFFF' }}
        defaultValue={10}
        onChange={handleLanguageClick}
        inputProps={{
          name: 'Language',
        }}
      >
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </SelectLang>
      <LoginButton
        onClick={(event: any) => {
          console.log(event);
        }}
        variant="outlined"
      >
        {t('Check Products')}
      </LoginButton>
    </AuthButtonsBox>
  );
};
