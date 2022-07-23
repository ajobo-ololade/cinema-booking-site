import logo from './logo.svg';
import './App.css';
import LandingpageNav from './components/LandingpageNav';
import PagesdropDown from './components/PagesdropDown';
import PreviewComponent from './components/PreviewComponent';
import PreviewPage from './pages/PreviewPage';
import LandingPage from './pages/LandingPage';

import {Routes,Route, Navigate} from 'react-router-dom'
import Test from './components/Test';
// import BookTicket from './components/BookTicket';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/preview" element={<PreviewPage/>}/>
    {/* <Route path='/book' element={<BookTicket />} /> */}
   
    </Routes>
    </>
  );
}

export default App;
