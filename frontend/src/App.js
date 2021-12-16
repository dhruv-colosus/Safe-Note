import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./screens/Landing Page/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/mynotes">
            <MyNotes />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
