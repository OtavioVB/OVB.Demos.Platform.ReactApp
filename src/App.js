import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './routes/Home/home.js';
import NotFound from './routes/NotFound/notfound.js';
import './App.css';
import CreateAccount from './routes/CreateAccount/createaccount.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home/>} />
        <Route exact path="/account/create" caseSensitive={false} element={<CreateAccount/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
