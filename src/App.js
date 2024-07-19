import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mode from './pages/Mode/Mode';
import Genres from './pages/Genres/Genres';
import Ranking from './pages/Ranking/Ranking';
import Chance from './pages/Chance/Chance';
import NoPage from './pages/NoPage/NoPage';
import "./App.scss";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mode' element={<Mode />}/>
          <Route path='/genres/:mode' element={<Genres />} />
          <Route path='/ranking/:genre' element={<Ranking />} />
          <Route path='/chance/:genre' element={<Chance />} />
          <Route path='*' element={<NoPage />} />  
      </Routes>
      </BrowserRouter>
      
    </div>
)};

export default App;
