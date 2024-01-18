import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '../components/Card';

const baseURL = "https://api.imgflip.com/get_memes";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:"auto"
}));


export default function Home() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setMemes(response.data.data.memes);
      })
      .catch((error) => {
        console.error("Error fetching :", error);
      });
  }, []);

  if (memes.length === 0) return null;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 4, md: 5 }} className='grid-img'>
        {memes.map((meme,index)=>(
        <Grid item xs={6}  md={3} key={index}>
          <Item><Card meme={meme}/></Item>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}