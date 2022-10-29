import Input from '@mui/material/Input';
import { Button, createTheme, ThemeProvider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TodoForm from './TodoForm';
import { Box } from '@mui/system';
import { grey } from "@mui/material/colors";
import { useEffect, useState } from 'react';

//style
const theme = createTheme({
   palette: {
      greyColor: {
         main: grey[500],
      },
   }
});

const ariaLabel = { 'aria-label': 'description' };

const ItemList = (props) => {
   const [todos, setTasks] = useState([]);

   const passSetTasks = (x) => {
      setTasks(x); //?Worked!!
   }

   //set id for a new element
   const [idReal, setId] = useState(0);

   //input text
   const [inputText, setInputText] = useState('');

   //add
   const onAdd = () => {
      if (inputText === '') {
         return;
      }
      setId((id) => id + 1)
      setTasks([...todos, { text: inputText, important: false, done: false, isEditClicked: false, id: idReal }]);
      setInputText('');
   }

   useEffect(() => {
      console.log(todos);
      if (todos.length === 0) {
         setId(1);
      }
   }, [todos, todos.length])

   return (
      <div>
         <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
               <Input sx={{ mb: '4px', pl: '10px', pr: '10px' }} onChange={(e) => { setInputText(e.target.value) }} value={inputText} fullWidth inputProps={ariaLabel} />
               <Button sx={{ mb: '9px' }} startIcon={<AddIcon />} variant='contained' color='greyColor' onClick={onAdd}>Add</Button>
            </Box>
         </ThemeProvider>
         {
            todos.filter((val) => {
               if (props.search === '') {
                  return val;
               } else if (val.text.toLowerCase().includes(props.search.toLowerCase())) {
                  return val;
               }
            }).filter((Item) => {
               if (props.type === 'important') {
                  return Item.important;
               } else if (props.type === 'done') {
                  return Item.done;
               } else if (props.type === 'all') {
                  return Item;
               }
               return Item;
            })
               .map((todo, i) => <TodoForm todos={todos} key={i} todo={todo} idReal={idReal} setTasks={passSetTasks} />)
         }
      </div>
   )
}

export default ItemList;