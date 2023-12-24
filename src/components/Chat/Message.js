import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Message = ({ content }) => {
    console.log('Message content:', content);
  return (
    <Card sx={{ margin: '10px', backgroundColor: '#f5f5f5' }}>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
         {content || "No message content available"}
     </Typography>

      </CardContent>
    </Card>
  );
};

export default Message;
