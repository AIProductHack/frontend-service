import './App.css';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {MainPage} from './components/MainPage'
import Authorization from './components/Authorization';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/auth" element={<Authorization/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;
