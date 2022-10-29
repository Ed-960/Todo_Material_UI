import { useState } from 'react';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import 'fontsource-roboto';
import { Container } from '@mui/material'
import Buttons from './Components/Buttons';


function App() {
  const [search, setSearch] = useState('');

  const passSetSearch = (x) => {
    setSearch(x); //?Worked!!
  }

  //filter  Important, Done or All
  const [type, setType] = useState('all')

  const passSetType = (type) => {
    setType(type); //?Worked!!
  }

  return (
    <Container sx={{ mt: '50px' }} maxWidth='sm'>
      <Header search={search} setSearch={passSetSearch} />
      <Buttons passSetType={passSetType} />
      <ItemList type={type} search={search} />
    </Container>
  );
}

export default App;