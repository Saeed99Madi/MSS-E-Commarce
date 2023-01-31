import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import { IProductattripute } from '../../../../../interfaces/IAttripute';
import { AttriputeCard } from './AttriputeCard';

type Props = {
  attriputes: IProductattripute[];
  attriputesDispatch: any;
};

export const AttriputeForms = (props: Props) => {
  const { attriputes, attriputesDispatch } = props;

  const handleAddNewAttr = () => {
    attriputesDispatch({
      type: 'add',
    });
  };

  return (
    <>
      <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
      <Typography color="#FFFFFF">Other Fields</Typography>
      {attriputes.map(attripute => {
        return (
          <AttriputeCard
            key={attripute.id}
            attripute={attripute}
            attriputes={attriputes}
            attriputesDispatch={attriputesDispatch}
          />
        );
      })}
      <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
      <Button
        variant="outlined"
        sx={{ color: '#FFFFFF' }}
        startIcon={<NoteAddIcon />}
        onClick={handleAddNewAttr}
      >
        add New Field
      </Button>
    </>
  );
};
