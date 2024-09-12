import { Routes, Route } from "react-router";
import {
  Header,
  Footer,
  CheckoutResults,
  Login,
  Home,
  Register,
  Collections,
  ProductDetail,
  Carts,
  Checkout,
  WarrantyPolicy,
  PrivacyPolicy,
  PaymentPolicy,
  DeliveryPolicy,
  Profile,
} from "./features";
import "./assets/styles/App.css";
import { ScrollToTopBtn } from "./components";
import { ScrollToTop } from "./utils";
function App() {
  return (
    <div className={"App bg-gray-50"}>
      <div id="mainContent" className="w-full flex flex-col">
        <Header />
        <div>
          <ScrollToTop />
          <ScrollToTopBtn />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:category" element={<Collections />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/results" element={<CheckoutResults />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/payment-policy" element={<PaymentPolicy />} />
            <Route path="/delivery-policy" element={<DeliveryPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
