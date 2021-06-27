import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import About from "./pages/about";
import UserProfile from "./pages/userprofile";
import WorkProfile from "./pages/workprofile";
import Filter from "./pages/filterpage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [auth, setAuth] = useState(false);
  console.log(auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Signin} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/work" component={WorkProfile}></Route>
          <Route path="/filter" component={Filter}></Route>
          <Route path="/user"><UserProfile auth={auth} /></Route>
        </Switch>
        <Footer setAuth={setAuth} auth={auth} />
      </BrowserRouter>
    </div>
  );
}

export default App;
