import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Axios } from '../../config';

interface IContact {
  name: string;
  email: string;
  mobile: string;
  content: string;
}

const ContactForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [message, setMessage] = useState<IContact>({
    name: '',
    email: '',
    mobile: '',
    content: '',
  });

  const handleChangeMesage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSendMessage = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data } = await Axios.post('contacts', { ...message });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To deliver clear message to us, please enter your email address and
            the message. And We will Respond to you as soon as possible And send
            updates occasionally.
          </DialogContentText>
          <TextField
            onChange={handleChangeMesage}
            name="name"
            value={message.name}
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChangeMesage}
            name="email"
            value={message.email}
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChangeMesage}
            name="mobile"
            value={message.mobile}
            autoFocus
            margin="dense"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChangeMesage}
            name="content"
            value={message.content}
            autoFocus
            margin="dense"
            label="Type Your Message her"
            type="text"
            rows={4}
            multiline
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendMessage}>send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactForm;
