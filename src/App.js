import "./App.css";
import Header from "./Components/Header";
import Result from "./Components/Result";

import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Result />
    </div>
  );
}

export default App;
