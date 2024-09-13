import './App.css';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainPage from './components/MainPage';
import ChatPage from './components/ChatPage/ChatPage';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/main" element={<MainPage/>} />
          <Route path='/' element={<ChatPage />} />
        </Routes>
      </Router>
  )
}

export default App;
