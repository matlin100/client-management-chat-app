import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Message = ({ content, isUserMessage }) => {
    const cardStyle = isUserMessage 
      ? { backgroundColor: '#DCF8C6', textAlign: 'right', marginLeft: 'auto' } 
      : { backgroundColor: '#ECECEC', textAlign: 'left' };
  
    return (
      <Card sx={{ maxWidth: '70%', margin: '10px', ...cardStyle }}>
        <CardContent>
          <Typography variant="body2">
            {content || "No message content available"}
          </Typography>
        </CardContent>
      </Card>
    );
  };

export default Message;
