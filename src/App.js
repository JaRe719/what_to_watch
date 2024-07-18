import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Mode from './Pages/Mode/Mode';
import Genres from './Pages/Genres/Genres';
import Ranking from './Pages/Ranking/Ranking';
import Chance from './Pages/Chance/Chance';
import NoPage from './Pages/NoPage/NoPage';
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
