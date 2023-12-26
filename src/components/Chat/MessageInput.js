import React from 'react';
import { Box, TextField, Button, CircularProgress } from '@mui/material';

const MessageInput = ({ name, setName, email, setEmail, chat, setChat, isLoading, handleSubmit }) => {
    return (
        <Box sx={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Chat"
                variant="outlined"
                fullWidth
                margin="normal"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                required
                multiline
                rows={4}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isLoading}
                sx={{ mt: 2 }}
            >
                {isLoading ? <CircularProgress size={24} /> : 'Send'}
            </Button>
        </Box>
    );
};

export default MessageInput;
