import { Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { IProductattripute } from '../../../../../../interfaces/IAttripute';
import { DescriptionInput } from '../../components.styled';

type Props = {
  attriputes: IProductattripute[];
  attripute: IProductattripute;
  attriputesDispatch: any;
};

export const AttriputeCard = (props: Props) => {
  const { attriputes, attripute, attriputesDispatch } = props;
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

  const handleRemoveNewAttr = (e: any) => {
    const { id } = e.target;
    attriputesDispatch({
      type: 'remove',
      id,
    });
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
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
    </div>
  );
};
