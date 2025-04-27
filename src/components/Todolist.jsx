import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from './Todo';
import TextField from '@mui/material/TextField';
import { v4 as idd } from 'uuid';
import { useState } from 'react';

const initialTodos =[
  {
    id: idd(),
    title:'Boudia Nadir',
    details:' lonely but talented  ',
    isCompleted:'false',
  },
  
  {
    id: idd(),
    title:' Boumediene Mounira ',
    details:'! she lost everyhthing but she have me  ',
    isCompleted:'false',
  },
  
 
]


export default function Todolist() {
  const[todos , setTodos]=useState(initialTodos);
  const[newtitle , setNewtitle]=useState("");

  function Handlecheck(todoid){
  const NewTodo = todos.map((t)=>{
    if(t.id === todoid)
    {
      t.isCompleted= !t.isCompleted;
    }
    return t ; 
  })
  setTodos(NewTodo)
  
  }

  function HandleClick() {
    const newTodo = {
      id: idd(),
      title: newtitle,
      details: "",
      isCompleted: false

    }
    setTodos([...todos , newTodo])
    setNewtitle('')    
  }
  const todo = todos.map((t)=>{
    return <Todo todo={t} key={t.id}  handlechange={Handlecheck}/>
  })
  return (
    <Container maxWidth="md">
      <CssBaseline />

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center', // Center text horizontally
              
              
            }}
          >
            <Typography variant="h2" gutterBottom style={{fontFamily:"All"}}>
              مهامي
            </Typography>
            
            <Divider    />
            
            <ToggleButtonGroup style={{marginTop:"30px", direction:"ltr"}}>
     
      <ToggleButton value="center" style={{  fontFamily:'A'}} >
       منجز
      </ToggleButton>
      <ToggleButton value="right" style={{  fontFamily:'A'}}>
        غير منجز
      </ToggleButton>
      <ToggleButton value="left" style={{  fontFamily:'A'}} >
       الكل
      </ToggleButton>
    </ToggleButtonGroup>
    {todo}
 
    
          </Box>
     <Box display="flex" justifyContent="flex-end" alignItems="center" gap={2} marginTop="20px">
  <TextField
 
    
      value={newtitle}
        onChange={(e)=>{
      setNewtitle(e.target.value)
   }}
  
    
    variant="outlined"
    sx={{

      backgroundColor: 'white',
      width: '100%',
    
    }}
  />
   <Button
                 onClick={HandleClick}


    variant="contained"
    sx={{
      background:'orange',
      height: '56px', // same height as TextField
      fontFamily: 'A', // optional: your font
      width:'30%'
      
    }}
  >
    اضافة
  </Button>
  
</Box>





      
           
        </CardContent>  
        
      

      </Card>
      
    </Container>
  );
}
