import { ButtonGroup, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const Buttons = (props) => {

   return (
      <ButtonGroup sx={{ mt: '9px' }}>
         <Button onClick={() => props.passSetType('done')} startIcon={<DoneIcon />} variant='contained' color='success'>Done</Button>
         <Button onClick={() => props.passSetType('important')} variant='contained' color='secondary'>important</Button>
         <Button onClick={() => props.passSetType('all')} variant='contained' color='primary'>all</Button>
      </ButtonGroup>
   );
};

export default Buttons;