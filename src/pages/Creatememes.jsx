import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const CreateMemeComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const memename = location.state?.name;
  const memeid = location.state?.memeId; 
  const memeurl = location.state?.url;
  const boxCount = location.state?.box_count;

  const [textboxValues, setTextboxValues] = useState(Array.from({ length: boxCount }, () => ''));

  const handleInputChange = (index, value) => {
    setTextboxValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const handleCreateMemeClick = () => {
    navigate('/display', { state: { memeId: memeid, name: memename, url: memeurl, box_count: boxCount,textboxValues:textboxValues } });
  };

  return (
    <div style={{ height: '100vh' }}>
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
          <img className="meme-img" src={memeurl} alt={memename} style={{ maxWidth: '100%' }} />
          <Typography variant="h6" mt={2}>
            {memename}
          </Typography>
        </Paper>

        <Box>
          {Array.from({ length: boxCount }, (_, index) => (
            <div key={index}>
              <Typography variant="subtitle1" mt={1} sx={{ color: 'white' ,fontSize: '30px'}}>
                Textbox {index + 1}:
              </Typography>
              <TextField
                style={{ width: '600px' }}
                type="text"
                value={textboxValues[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                sx={{ backgroundColor: 'white' }}
              />
            </div>
          ))}

          <Button variant="contained" onClick={handleCreateMemeClick} sx={{ marginTop: 2 }} style={{ width: '200px' }}>
            Create MEME
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateMemeComponent;
