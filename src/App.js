import React from "react";
import './App.css';
import LandingpageNav from './components/LandingpageNav';
import PagesdropDown from './components/PagesdropDown';
import PreviewComponent from './components/PreviewComponent';
import PreviewPage from './pages/PreviewPage';
import LandingPage from './pages/LandingPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route, Navigate} from 'react-router-dom'
import Test from './components/Test';
// import { Book } from '@mui/icons-material';
// import BookTicket from './components/BookTicket';
 import Book from './components/Book';
import Idconfirm from './components/Idconfirm';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/preview" element={<PreviewPage/>}/>
    <Route path='/book' element={<Book/>} />
    <Route path='/payment' element={<Idconfirm/>} />
   
    </Routes>
    </>
  );
}

export default App;
