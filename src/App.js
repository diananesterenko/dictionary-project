import "./App.css";
import Dictionary from "./Dictionary";
import "./Results.css";

function App() {
  return (
    <div className="App ">
      <header className="App-header ">
        <h1>Enter the word you need to find</h1>
        <main className="container">
          <Dictionary />
        </main>
        <footer className="box footer">Coded by Diana Nesterenko</footer>
      </header>
    </div>
  );
}

export default App;
