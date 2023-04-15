import "./App.css";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
})

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Pet name = 'luna' animal = 'dog' breed = 'somebreed'/>
      <SearchParams />
     
    </div>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
