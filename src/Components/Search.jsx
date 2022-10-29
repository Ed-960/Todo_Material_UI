import { TextField } from "@mui/material";
import { ThemeProvider } from '@mui/material'

const Search = (props) => {

   // filter search
   const handleChange = (event) => {
      props.setSearch(event.target.value);
   } //?Worked!!

   return (
      <ThemeProvider theme={props.theme}>
         <TextField
            label='search'
            variant="standard"
            type='search'
            value={props.search}
            onChange={handleChange}
            color='primary'
            sx={{
               mb: '1rem'
            }}
         />
      </ThemeProvider>
   );
};

export default Search;