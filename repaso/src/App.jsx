import { Route } from "react-router-dom";
import CharacterDetailPage from "./page/CharacterDetailPage";
import ContactMe from "./page/ContactMe";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/character/:id" component={CharacterDetailPage} />
      <Route exact path="/contact" component={ContactMe} />
    </div>
  );
}

export default App;
