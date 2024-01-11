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
import CartItem from './components/CartItem';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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
            <Route path="/payment" element={<Payment />} />
            <Route path="/cartItem" element={<CartItem />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </Wrapper>
        <ToastContainer

          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnclick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />
      </BrowserRouter>
      <div className="App ">
        <header className="App-header">
        </header>
      </div>

    </>
  );
}

export default App;
