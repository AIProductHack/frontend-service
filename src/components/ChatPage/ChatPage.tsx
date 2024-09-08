import React, { useState } from "react";
import { Box, Container, Paper, TextField, IconButton, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { Query } from '../../queryHandler/Abstract';
import QueryHandlerFactory from "../../queryHandler/Factory";

import './ChatPage.css'

type Message = {
    sender: string;
    content: React.ReactNode;
}


const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState<string>("");

    const handlerFactory = new QueryHandlerFactory('json');

    const handleSendMessage = () => {
        if (inputText.trim()) {
            const userMessage: Message = { sender: "user", content: inputText}
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInputText("");
        }

        try {
            const query: Query = {
                content: inputText.trim()
            };
            var handler = handlerFactory.getHandler(query);
            var content = handler.getRenderedResponse();
            const botResponse: Message = { sender: "bot", content: content};
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        } catch (error) {
            const errStr = `${error}`;
            const botResponse: Message = { sender: "bot", content: errStr };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }
    };

    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <Box
                component="header"
                bgcolor="primary.dark"
                color="white"
                p={2}
                textAlign="center"
                fontWeight="bold"
            >
                Component Generator
            </Box>

            <Container component="main" style={{ flexGrow: 1, overflowY: "auto", paddingTop: "16px" }}>
                <Paper style={{ padding: "16px", backgroundColor: "#f7f7f7", height: "70vh", overflowY: "auto" }}>
                    {messages.map((msg, index) => (
                        <Typography
                            key={index}
                            style={{
                                margin: "8px 0",
                                textAlign: msg.sender === "user" ? "right" : "left",
                                backgroundColor: msg.sender === "user" ? "#e0f7fa" : "#fff",
                                padding: "10px",
                                borderRadius: "8px",
                                maxWidth: "100%",
                                marginLeft: msg.sender === "user" ? "auto" : "0",
                            }}
                        >
                            {msg.content}
                        </Typography>
                    ))}
                </Paper>
                <Box component="main" p={2} bgcolor="#fff" display="flex" alignItems="center">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Type your message here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <IconButton color="primary" onClick={handleSendMessage}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default ChatPage;