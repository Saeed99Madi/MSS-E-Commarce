import ListItem from './ListItem';

const CategoriesList = ({ open }: { open: boolean }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <ListItem open={open} />
      <ListItem open={open} />
    </div>
  );
};

export default CategoriesList;
