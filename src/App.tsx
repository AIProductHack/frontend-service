import './App.css';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import TestPage from './components/TestPage';
import ChatPage from './components/ChatPage/ChatPage';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path='/test' element={<TestPage/>} />
          <Route path='/chat' element={<ChatPage />} />
        </Routes>
      </Router>
  )
}

export default App;
