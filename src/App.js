import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './routes/Home/home.js';
import NotFound from './routes/NotFound/notfound.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
