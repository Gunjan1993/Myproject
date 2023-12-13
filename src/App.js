import './App.css';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Donatenow from './pages/donatenow';
import About from './pages/About';
import Contact from './pages/Contact';
import Donateform from './pages/donateform';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Payment from './pages/payment';
import Success from './pages/success';
import Failure from './pages/failure';
import Privacy_Policy from './pages/Privacy_Policy';
import Terms from './pages/Terms';
import Refundpolicy from './pages/Refundpolicy';
import Adopt from './pages/adopt';
import Medical from './pages/medical';
import Blanket from './pages/blanket';
import Grocery from './pages/Grocery';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <br></br>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/donatenow' element={<Donatenow/>}></Route>
        <Route path='/donateform' element={<Donateform/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>
        <Route path="/payment"  element={<Payment/>}></Route>
        <Route path="/success"  element={<Success/>}></Route>
        <Route path="/failure"  element={<Failure/>}></Route>
        <Route path="/privacypolicy"  element={<Privacy_Policy/>}></Route>
        <Route path="/termsnconditions"  element={<Terms/>}></Route>
        <Route path="/refundpolicy"  element={<Refundpolicy/>}></Route>
        <Route path="/adopt"  element={<Adopt/>}></Route>
        <Route path="/medical"  element={<Medical/>}></Route>
        <Route path="/blanket"  element={<Blanket/>}></Route>
        <Route path="/grocery"  element={<Grocery/>}></Route>


        </Routes>

      
      <Footer />
      </Router>
    </div>
  );
}

export default App;
