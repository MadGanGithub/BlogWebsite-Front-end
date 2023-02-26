import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import cover from "../assets/cricket.png";


export default function ActionAreaCard() {
  return (
    <Box sx={{mb:5}}>
    <Card sx={{ maxWidth: 700,borderRadius:1} } >
        
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="150"
          image={cover}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cricket
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cricket is a sport widely played across India and Pakistan;
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  );
}