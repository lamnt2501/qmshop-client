import { Outlet } from "react-router";
import { Header, Footer } from "./features";
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
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
