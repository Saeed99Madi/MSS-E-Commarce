import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { IParentListItem } from '../interfaces.styled';

export const CategoriesListWrapper = styled('div')(
  ({ open }: { open: boolean }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '100%',
    width: `${open ? '55vw' : '68vw'}`,
    paddingBottom: '4rem !important',
    overflowY: 'scroll',
    WebkitScrollSnapType: 'both',
    marginRight: `${open ? '-80px' : '170px'}`,
  }),
  `
    ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f6cd06;
    outline: 1px solid #f6cd06;
    border-radius: 8px;
  }
  `,
);

export const ParentListItem = styled(List)(({ open }: IParentListItem) => ({
  // width: `${!open ? '85%' : '100%'}`,
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  borderRadius: '12px',
  borderTop: '2px solid #424244',
}));

export const CloseSign = styled('div')`
  background-color: #f6cd06;
  width: 16px;
  height: 2px;
}}
`;

export const OpenSign = styled('div')`
  color: #fff;
  font-size: 2rem
}}
`;

export const CustomSpan = styled('span')`
  color: #fff;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
}}
`;

export const SubLIstItemWrapper = styled('div')`
  border-top: 2px solid #424244
}}
`;

export const EditIcon = styled(ModeEditOutlineOutlinedIcon)(() => ({
  marginRight: '20px',
}));
