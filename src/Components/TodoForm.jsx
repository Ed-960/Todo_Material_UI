import { Box, Button, ButtonGroup, Checkbox, createTheme, Divider, FormControlLabel, Input, ThemeProvider } from "@mui/material";
import TaskIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deepPurple, green, red, yellow } from "@mui/material/colors";
import { useState } from "react";

const theme = createTheme({
   palette: {
      primary: {
         main: deepPurple[800],
      },
      secondary: {
         main: yellow[500],
      },
      redred: {
         main: red[500],
      },
      greenColor: {
         main: green[600],
      },
   }
})

const TodoForm = (props) => {
   const { todo, setTasks } = props
   // edited Text
   const [editedInputText, setEditedInputText] = useState('');

   const importantColor = todo.important ? 'primary' : 'secondary';
   const isReadonly = todo.isEditClicked ? false : true;
   let value = todo.isEditClicked ? editedInputText : todo.text;


   //save or edit icon
   const icon = todo.isEditClicked ? <SaveAltIcon sx={{ ml: '10px' }} /> : <EditIcon sx={{ ml: '10px' }} />



   //Edit
   const onEdit = (id) => {
      setTasks(prevState => prevState.map(todo => (todo.id === id) ? { ...todo, text: editedInputText, isEditClicked: !todo.isEditClicked } : todo),
      ); //?Worked!!
   }

   //important
   const onImportant = (id) => {
      setTasks(prevState => prevState.map(todo => (todo.id === id) ? { ...todo, important: !todo.important } : todo)
      ); //?Worked!!
   }

   //done
   const onDone = (id) => {
      setTasks(prevState => prevState.map(todo => (todo.id === id) ? { ...todo, done: !todo.done } : todo)
      ); //?Worked!!
   }

   //delete task
   const onDelete = (id) => {
      setTasks(prevState => prevState.filter(el => el.id !== id))
   } //?Worked!!



   const toEdit = () => {
      onEdit(todo.id);
      setEditedInputText(props.todo.text);
   }

   return (
      <ThemeProvider theme={theme}>
         <Box sx={{ display: 'flex' }}>
            <FormControlLabel
               control={<Checkbox
                  checked={props.todo.done}
                  checkedIcon={<TaskIcon fontSize="medium" color='success' />}
                  onChange={() => { onDone(props.todo.id) }}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
               />}
            />

            <Input sx={{ pr: '10px' }} onChange={(e) => { setEditedInputText(e.target.value) }} fullWidth readOnly={isReadonly} value={value} />
            <ButtonGroup sx={{ float: 'right', height: '38px' }}>
               <Button
                  onClick={toEdit}
                  sx={{ padding: '0px' }}
                  startIcon={icon}
                  variant='contained'
                  color='greenColor'
               ></Button>
               <Button
                  onClick={() => { onImportant(props.todo.id) }}
                  startIcon={<NotificationImportantIcon sx={{ ml: '10px' }} />}
                  sx={{ padding: '0px' }}
                  color={importantColor}
                  variant='contained'
               ></Button>
               <Button
                  onClick={() => { onDelete(props.todo.id) }}
                  startIcon={<DeleteOutlineIcon sx={{ ml: '10px' }} />}
                  sx={{ padding: '0px' }}
                  color='redred'
                  variant='contained'
               > </Button>
            </ButtonGroup>
         </Box>
         <Divider />
      </ThemeProvider>
   )
}

export default TodoForm;
