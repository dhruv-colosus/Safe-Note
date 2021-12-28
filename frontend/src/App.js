import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./screens/Landing Page/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import CreateNote from "./Components/CreateNote";
import SingleNote from "./Components/SingleNote";
import { useState } from "react";
import Profile from "./Components/Profile";
function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Header setSearch={setSearch} />
        <Switch>
          <Route path="/mynotes" exact>
            <MyNotes search={search} />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/createnote" exact>
            <CreateNote />
          </Route>
          <Route path="/note/:id">
            <SingleNote />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
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
