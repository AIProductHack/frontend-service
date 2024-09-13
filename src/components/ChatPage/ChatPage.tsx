import React, { useState } from "react";
import { 
    Box,
    Container,
    Paper,
    TextField,
    IconButton,
    Typography,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { Query } from '../../queryHandler/Abstract';
import QueryHandlerFactory, { QueryMode } from "../../queryHandler/Factory";

import './ChatPage.css'
import TextQueryHandler from "../../queryHandler/Text";

type Message = {
    sender: string;
    content: React.ReactNode;
}


const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const [mode, setMode] = useState<string>("text");

    const handleModeChange = (event: any) => {
        setMode(event.target.value as string);
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            const userMessage: Message = { sender: "user", content: inputText}
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInputText("");
        }
        try {
            let handleMode: QueryMode = QueryMode[mode as keyof typeof QueryMode];
            const handlerFactory = new QueryHandlerFactory(handleMode);
            const query: Query = {
                content: inputText.trim()
            };
            const handler = handlerFactory.getHandler(query);
            setTimeout(() => {
                console.log("это временный костыль чтобы запрос успел обработаться");
                const content = handler.getRenderedResponse();
                const botResponse: Message = { sender: "bot", content: content };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 30000);
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
                <Box display="flex" justifyContent="left" alignItems="left" p={2} bgcolor="#fff">
                    <Box display="flex" justifyContent="left" alignSelf="left" p={2} bgcolor="#fff">
                        <FormControl variant="outlined" style={{ minWidth: 200 }}>
                            <InputLabel id="mode-select-label">Select Mode</InputLabel>
                            <Select
                                labelId="mode-select-label"
                                id="mode-select"
                                value={mode}
                                onChange={handleModeChange}
                                label="Select Mode"
                            >
                                <MenuItem value="text">Text</MenuItem>
                                <MenuItem value="json">JSON</MenuItem>
                                <MenuItem value="audio">Audio</MenuItem>
                                <MenuItem value="image">Image</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box 
                        component="main"
                        p={2}
                        bgcolor="#fff"
                        display="flex"
                        alignSelf="right"
                        alignItems="right"
                        width="100%"
                    >
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
                </Box>
            </Container>
        </Box>
    );
};

export default ChatPage;