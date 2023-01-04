import { styled } from '@mui/material/styles';

export const CategoriesListWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding-bottom: 4rem !important;
  overflow-y: scroll;
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
`;
