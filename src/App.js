import logo from './logo.svg';
import './App.css';
import LandingpageNav from './components/LandingpageNav';
import PagesdropDown from './components/PagesdropDown';

import {Routes,Route, Navigate} from 'react-router-dom'
import Test from './components/Test';

function App() {
  return (
    <>
    <LandingpageNav/>
    <Routes>
    <Route path="/test" element={<Test/>}/>
   
    </Routes>
    </>
  );
}

export default App;
