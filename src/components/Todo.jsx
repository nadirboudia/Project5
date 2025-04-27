import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function Todo({todo , handlechange}) {
 function HandlecheckClick(){
 handlechange(todo.id);
  
 }
  return (
    <>
      <Card className='Todocard' sx={{ minWidth: 275, background: "#283593", color: "white", marginTop: 5 }}>
        <CardContent>
          <Grid container spacing={2} justifyContent="space-between">
            
            <Grid item xs={8}>
              <Box sx={{  p: 1 }}>
                <Typography variant="h5" sx={{ textAlign: 'right', fontFamily:'All' }}>
                {todo.title}

                  </Typography>
                <Typography variant="h6" sx={{ textAlign: 'right' , fontFamily:"sans-serif" }}>
                  {todo.details}
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={4}>
              <Box
                sx={{
               
                  margin: '4px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  p: 1,
                  borderRadius: 1
                }}
              >
                
                <IconButton
                className='iconButton'
                onClick={()=>{
                  HandlecheckClick()
                }}
                  aria-label="CheckSharpIcon"
                  sx={{
                    color: todo.isCompleted ? "#8bc34a" : "white"  ,
                    background: todo.isCompleted ? 'white' : "#8bc34a",
                    border: 'solid #8bc34a 3px'
                  }}
                >
                  <CheckSharpIcon />
                </IconButton>

                <IconButton
                className='iconButton'
                  aria-label="CreateSharpIcon"
                  sx={{
                    color: '#1769aa',
                    background: 'white',
                    border: 'solid #1769aa 3px'
                  }}
                >
                  <CreateSharpIcon />
                </IconButton>

                <IconButton
                className='iconButton'
                  aria-label="DeleteOutlineOutlinedIcon"
                  sx={{
                    color: '#b23c17',
                    background: 'white',
                    border: 'solid #b23c17 3px'
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
