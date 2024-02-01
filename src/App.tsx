
import { AppBar, Container, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'

import './App.css'
import { useState } from 'react';
import Additem from './Additem';
export type Item={
  product:string;
  amount:string;
}
function App() {
  const[items,setItems]=useState<Item[]>([]);
  const addItem=(item:Item)=>{
    setItems([item,...items]);
  }
  return (
    <Container> 
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3'>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
      <Additem addItem={addItem} />
      <List>
        {
          items.map((item,index)=>
          <ListItem key={index}>
            <ListItemText primary={item.product} secondary={item.amount}/>

          </ListItem>
       ) }
      </List>
      
    </Container>
  )
}

export default App
