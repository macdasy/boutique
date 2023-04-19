import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import ChipSelection from './Filters/Select2';
import ColorSelection from './Filters/ColorSelection';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const sizes = ['s', 'm', 'l', 'xl', 'xxl'];
const colors = ['black', 'blue', 'yellow', 'green', 'white'];

export default function Menu(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const apply =() => {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <MenuIcon sx={{ color: 'orange'}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div id='input-field-2'>
                <ChipSelection id='size' values={sizes}/>
                <ColorSelection id='color' colors={colors}/>
                <Button style={{ marginLeft:'2%', color:'orange', background:'black' }} onClick={apply} > Apply </Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
