import "./App.css";
import PokeDex from "./components/pokedex/PokeDex";
import { Route, Switch } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon";
import HomePage from "./components/homepage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { useSelector } from "react-redux";
import Spinner from "./components/common/spinner/Spinner";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const counter = useSelector((state) => state.counter);
  if (counter !== 0) {
    return <Spinner />;
  }
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokedex" component={PokeDex} />
        <Route path="/about" component={About} />
        <Route path="/pokemon/:index" component={Pokemon} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
