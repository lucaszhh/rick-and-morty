import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './views/About';
import App from './views/App';
import Faq from './views/Faq';
import Layout from './Layout';
import Character from './views/Character';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* {<Route path="*" element={<div>404 - Not found</div>} />} */}
        <Route path="/" element={<Layout/>} >
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="characters/:idCharacter" element={<Character/>}/>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


