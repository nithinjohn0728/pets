import "./App.css";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div className="App">
      <Pet name = 'luna' animal = 'dog' breed = 'somebreed'/>
      <SearchParams />
    </div>
  );
}

export default App;
