import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { UpdateOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { DashboardContext } from '../../../../context/DashboardContext';
import { IContact } from '../../../../interfaces/IContact';

const ShowContact = () => {
  const { openShowContact, setOpenShowContact, contacts, slectedContact } =
    useContext(DashboardContext);
  const [contact, setContact] = useState<IContact>();
  const hanleCloseShowContact = () => {
    setOpenShowContact(false);
  };
  const checkContactId = (conatct: IContact) => {
    return conatct.id === slectedContact;
  };
  useEffect(() => {
    const showContact = contacts.find(checkContactId);
    if (showContact) {
      setContact(showContact);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slectedContact]);
  return (
    <div>
      <Dialog
        open={openShowContact}
        // onClose={handleClose}
        PaperProps={{
          style: {
            background: '#141417',
            color: '#FFFFFF',
            minHeight: '50vh',
            minWidth: '50vw',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            paragraph
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <UpdateOutlined
              fontSize="large"
              sx={{
                marginRight: '1rem',
                fontSize: '28px',
              }}
            />
            {contact?.name}
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <TextField
            sx={{
              marginTop: '1rem',
              input: { color: '#FFFFFF' },
              label: { color: '#FFFFFF' },
            }}
            label="Phone"
            type="text"
            value={contact?.phone}
          />
          <TextField
            sx={{
              input: { color: '#FFFFFF' },
              label: { color: '#FFFFFF' },
            }}
            label="Email"
            type="text"
            value={contact?.email}
          />
          <TextField
            sx={{
              textarea: { color: '#FFFFFF' },
              label: { color: '#FFFFFF' },
            }}
            multiline
            rows={5}
            label="Email"
            type="text"
            value={contact?.content}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={hanleCloseShowContact}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowContact;
