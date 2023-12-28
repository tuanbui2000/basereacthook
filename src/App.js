import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route, Navigate, useLocation, } from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import PreservationPolicy from './components/Footer/PreservationPolicy';
import Shipping from './components/Footer/Shipping';
import DisplayAllItem from './components/DisplayItem';
import { useLayoutEffect } from 'react';
import ReturnRefund from './components/Footer/ReturnRefurn';
import Usage from './components/Footer/Usage';
import Payment from './components/Payment/Payment';

function App() {


  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/detail-item" element={<ProductDetail />} />
            <Route path="/preventation-policy" element={<PreservationPolicy />} />
            <Route path="/return-refund-policy" element={<ReturnRefund />} />
            <Route path="/all-item" element={<DisplayAllItem />} />
            <Route path="/shipping-policy" element={<Shipping />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
      <div className="App ">
        <header className="App-header">
        </header>
      </div>
    </>
  );
}

export default App;
