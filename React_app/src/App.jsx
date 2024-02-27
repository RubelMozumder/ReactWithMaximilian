import { Fragment } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import TicTacToe from './pages/TicTacToe.jsx';
import Reactpage from './pages/Reactpage.jsx';

function App() {
  return (
    <Fragment>
      <div id="root">
        <Navbar />
        <Routes>
          <Route path='/' element={<Reactpage />}></Route>
          {/* <Route path='/TicTacToe' element={<TicTacToe />}></Route> */}
          <Route path='/Reactpage' element={<Reactpage />}></Route>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
