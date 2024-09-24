import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
import SplashPage from "./pages/Splash/SplashPage";

const Cart = lazy(() => import("./pages/CartContent/CartItems"));
const Homepage = lazy(() => import("./pages/Home/Home"));
const Errorpage = lazy(() => import("./pages/Error/Error"));
const Productlist = lazy(() => import("./pages/Products/ProductList"));
const ProductDetails = lazy(() => import("./pages/SingleProduct/SingleProduct")
);
const splash = document.getElementById("splash");
const mainContent = document.getElementById("main-content");

// const Splash = () => { 
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 667500);
//     return () => clearTimeout(timer);
//   }, []);
// }

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? <div id="splash">< SplashPage />  </div>
        : 
    
    <Router>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/products" component={Productlist}></Route>
          <Route exact path="/about" component={Homepage}></Route>
          <Route
            exact
            path="/products/:id"
            children={<ProductDetails />}
          ></Route>
          <Route exact path="*" component={Errorpage}></Route>
        </Switch>
      </Suspense>
      </Router>
      }
      </div>
  );
}
