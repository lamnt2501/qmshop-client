import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
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
  NotFound,
  Infomation,
  CustomerOrders,
  CustomerAddress,
} from "./features";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="collections">
            <Route index element={<Collections />} />
            <Route path=":category" element={<Collections />} />
          </Route>

          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="carts" element={<Carts />} />

          <Route path="checkout">
            <Route index element={<Checkout />} />
            <Route path="results" element={<CheckoutResults />} />
          </Route>

          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate to="infomations" />} />
            <Route path="infomations" element={<Infomation />} />
            <Route path="orders" element={<CustomerOrders />} />
            <Route path="address" element={<CustomerAddress />} />
          </Route>

          <Route path="warranty-policy" element={<WarrantyPolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="payment-policy" element={<PaymentPolicy />} />
          <Route path="delivery-policy" element={<DeliveryPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
