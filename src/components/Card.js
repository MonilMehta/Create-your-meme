import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Card = ({ meme }) => {
  const navigate = useNavigate();

  const handleCreateMemeClick = () => {
    navigate('/create',{ state: { memeId: meme.id ,"name": meme.name,"url": meme.url,"box_count": meme.box_count}});
  };

  return (
    <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
      <img className="meme-img" src={meme.url} alt={meme.name} style={{ maxWidth: '100%' }} />
      <Typography variant="h6" mt={2}>
        {meme.name}
      </Typography>
      <Button variant="outlined" onClick={handleCreateMemeClick}>
        Create MEME
      </Button>
    </Paper>
  );
};

export default Card;
