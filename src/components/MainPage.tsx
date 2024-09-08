import React from 'react';
import { Box, Container } from '@mui/material';


const MainPage: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <Box
                    component="header"
                    bgcolor="primary.dark"
                    color="white"
                    p={2}
                    fontWeight="bold"
                    textAlign="left"
                >
                <Container>
                    <a href="/chat">Chat</a>
                </Container>
            </Box>

            <Container component="main" style={{ flexGrow: 1, overflowY: "auto", paddingTop: "16px" }}>
                This is main page of component generator for NLMK components
                <br />
                Visit <a href='/chat'>chat</a> to test our product :)
            </Container>
        </Box>
    )
}

export default MainPage;