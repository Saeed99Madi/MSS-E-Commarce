// import { Dispatch, SetStateAction } from 'react';
import { Button, Divider, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import { IProductattripute } from '../../../../../interfaces/IAttripute';
import { DescriptionInput } from '../components.styled';

type Props = {
  attriputes: IProductattripute[];
  attriputesDispatch: any;
};

export const AttriputeForms = (props: Props) => {
  const { attriputes, attriputesDispatch } = props;
  const handleNewAttrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    // eslint-disable-next-line eqeqeq
    const objindex = attriputes.findIndex(obj => obj.id == id);

    attriputesDispatch({
      type: 'edit',
      newAttr: { ...attriputes[objindex], [name]: value },
      index: objindex,
    });
  };
  const handleAddNewAttr = () => {
    attriputesDispatch({
      type: 'add',
    });
  };
  const handleRemoveNewAttr = (e: any) => {
    const { id } = e.target;

    attriputesDispatch({
      type: 'remove',
      id,
    });
  };
  return (
    <>
      <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
      <Typography color="#FFFFFF">Other Fields</Typography>
      {attriputes.map(attripute => {
        return (
          <>
            <DescriptionInput
              key={`${attripute.id}Attripute title`}
              sx={{ label: { marginLeft: '1rem' } }}
              name="title"
              onChange={handleNewAttrChange}
              value={attripute.title}
              id={attripute.id}
              label="Attripute title"
              variant="standard"
            />

            <DescriptionInput
              key={`${attripute.id}Attripute Description`}
              sx={{ label: { marginLeft: '1rem' } }}
              name="description"
              onChange={handleNewAttrChange}
              value={attripute.description}
              id={attripute.id}
              label="Attripute Description"
              multiline
              rows={4}
            />
            <Button
              id={attripute.id}
              variant="outlined"
              sx={{ color: '#FFFFFF' }}
              startIcon={<RemoveCircleOutlineIcon />}
              onClick={handleRemoveNewAttr}
            >
              Remove
            </Button>
          </>
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
