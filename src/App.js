import { Route, Switch } from "react-router-dom";
import AboutPage from "./Layout/Pages/AboutPage";
import BlogPage from "./Layout/Pages/BlogPage";
import ContactPage from "./Layout/Pages/ContactPage";
import HomePage from "./Layout/Pages/HomePage";
import LoginPage from "./Layout/Pages/LoginPages/LoginPage";
import RegisterPage from "./Layout/Pages/LoginPages/RegisterPage";
import ProductListPage from "./Layout/Pages/ProductListPage";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import PricingPage from "./Layout/Pages/PricingPage";
import ProductsPage from "./Layout/Pages/ProductsPage";
import TeamPage from "./Layout/Pages/TeamPage";
import { fetchCategory } from "./redux/features/thunk/fetchCategory";
import { fetchProducts } from "./redux/features/thunk/fetchProducts";
import { fetchUserLogin } from "./redux/features/thunk/fetchUserLogin";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product.productList);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserLogin());
    }
  }, []);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    products?.length === 0 && dispatch(fetchProducts());
  });

  return (
    <div className="App w-full m-auto font-montserrat">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shopping/:gender?/:category?">
          <ProductListPage />
        </Route>
        <Route exact path="/shopping/:id">
          <ProductsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
