import { AppBar, Toolbar, Typography } from "@mui/material";
import Search from "./Search";
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { deepPurple, green } from "@mui/material/colors";

const theme = createTheme({
   palette: {
      primary: {
         main: deepPurple[800],
      },
      secondary: {
         main: green[400],
      }
   }
})


const Header = (props) => {
   return (
      <ThemeProvider theme={theme}>
         <AppBar color='secondary' position='static'>
            <Toolbar>
               <Typography variant='h6' noWrap component='div'
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  Todo List
               </Typography>
               <Search theme={theme} setSearch={props.setSearch} search={props.search} />
            </Toolbar>
         </AppBar>
      </ThemeProvider>
   )
}

export default Header;
