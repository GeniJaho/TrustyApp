import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import About from "./pages/about";
import UserProfile from "./pages/userprofile";
import WorkProfile from "./pages/workprofile";
import Filter from "./pages/filterpage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CraftsmanSignup from "./pages/CraftsmanSignup";
import CraftsmanProfile from "./pages/CraftsmanProfile";
import { useState } from "react";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Signin} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/craftsman/signup" component={CraftsmanSignup} />
          <Route path="/home"><Home searchValue={searchValue} setSearchValue={setSearchValue} /></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/work/:id" component={WorkProfile}></Route>
          <Route path="/filter"><Filter searchValue={searchValue} setSearchValue={setSearchValue} /></Route>
          <Route path="/user" component={UserProfile}/>
          <Route path="/craftsman/profile" component={CraftsmanProfile}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
