import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CarouselAndLogin from "./components/carouselandlogin/CarouselAndLogin";
import Otp from "./components/otp/Otp";
import OurCategory from "./components/ourcategory/OurCategory";
import Register from "./components/register/Register";
import LandingPage from "./components/landingpage/LandingPage";
import HomePage from "./homepage/HomePage";
import OrderHistory from "./components/orderhistory/OrderHiistory";
import DeliveryAddress from "./components/deliveryaddress/DeliveryAddress";
import Cart from "./components/cart/Cart";
import RecepiesCarousel from "./components/recepiesCarousel/RecepiesCarousel";
import AddNewAddress from "./components/addnewaddress/AddNewAddress";
import PaymentMethod from "./components/payments/paymentmethods/Paymentmethod";
import CardPage from "./components/payments/card/CardPage";
import Chicken from "./components/chicken/Chicken";
import SpecificPage from "./components/specificpage/SpecificPage";
import DeliveryLocation from "./components/deliverylocation/DeliveryLocation";
import Congratulations from "./components/congratulations/Congratulations";
import Upi from "./components/payments/upi/Upi";
import Profile from "./components/profile/Profile";
import Order from "./components/order/Order";
import ErrorBoundary from "./errorboundary/ErrorBoundary";
import { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import AdminLogin from "./components/admin/AdminLogin";
const LazyHomePage = lazy(() => import("../src/homepage/HomePage"));
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<CarouselAndLogin />} />
          <Route path="otp/:id" element={<Otp />} />
          <Route path="ourCategory" element={<OurCategory />} />
          <Route path="deliveryAddress" element={<DeliveryAddress />} />
          <Route path="newAddress" element={<AddNewAddress />} />
          <Route path="paymentMethod" element={<PaymentMethod />} />
          <Route path="upi" element={<CardPage />} />
          <Route path="card" element={<Upi />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chicken" element={<Chicken />} />
          <Route path="order" element={<Order />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="specificPage/:id" element={<SpecificPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    // <Suspense
    //   fallback={
    //     <Box
    //       component={"img"}
    //       src="data:image/png;base64,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"
    //     ></Box>
    //   }
    // >
    //   <BrowserRouter>
      
    //   <Routes>
    //     <Route path="/" element={<LazyHomePage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Suspense>
  );
}
export default App;
