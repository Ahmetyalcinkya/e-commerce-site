import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Layout/Pages/HomePage";
import ProductListPage from "./Layout/Pages/ProductListPage";
import AboutPage from "./Layout/Pages/AboutPage";
import BlogPage from "./Layout/Pages/BlogPage";
import ContactPage from "./Layout/Pages/ContactPage";
import LoginPage from "./Layout/Pages/LoginPages/LoginPage";
import RegisterPage from "./Layout/Pages/LoginPages/RegisterPage";

import "./App.css";
import TeamPage from "./Layout/Pages/TeamPage";
import ProductsPage from "./Layout/Pages/ProductsPage";
import PricingPage from "./Layout/Pages/PricingPage";
import { useEffect } from "react";
import { fetchUserLogin } from "./redux/features/thunk/fetchUserLogin";
import { renewAPI } from "./utilities/axiosWithAuth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserLogin());
    }
  }, []);

  return (
    <div className="App w-full m-auto font-montserrat">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductListPage />
        </Route>
        <Route exact path="/product/:id">
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
