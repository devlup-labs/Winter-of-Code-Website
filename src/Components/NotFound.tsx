
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  const navigate=useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url('https://i.imgur.com/We1DyJi.png')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <Typography variant="h1" style={{ color: 'black' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button onClick={()=>{
        navigate("/");
      }} variant="contained">Back Home</Button>
    </Box>
  );
}