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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Signin} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/craftsman/signup" component={CraftsmanSignup} />
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/work/:id" component={WorkProfile}></Route>
          <Route path="/filter" ><Filter/></Route>
          <Route path="/user"><UserProfile/></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
