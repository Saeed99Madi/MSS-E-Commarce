import { Logo } from './Logo';
import { Actions } from './Actions';

import { NavHeader } from './NavHeader';

import { StyledHeader } from './components.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavHeader />
      <Actions />
    </StyledHeader>
  );
};

export default Header;
