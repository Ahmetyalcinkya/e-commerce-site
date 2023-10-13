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

function App() {
  return (
    <div className="App w-full m-auto">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products">
          <ProductListPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/contact">
          <LoginPage />
        </Route>
        <Route path="/contact">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
