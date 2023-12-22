import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import PreservationPolicy from './components/PreservationPolicy';
import Shipping from './components/Shipping';
import ReturnRefund from './components/ReturnRefurn';
import DisplayAllItem from './components/DisplayItem';

function App() {
  return (

    <>
      <BrowserRouter>
        <Header isHomePage={true} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail-item" element={<ProductDetail />} />
          <Route path="/preventation-policy" element={<PreservationPolicy />} />
          <Route path="/return-refund-policy" element={<ReturnRefund />} />
          <Route path="/all-item" element={<DisplayAllItem />} />
          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <div className="App ">
        <header className="App-header">
        </header>


      </div>
    </>
  );
}

export default App;
