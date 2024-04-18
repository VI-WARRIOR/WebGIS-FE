import "./App.css";
import { Home } from "./App/Home";
import { FooterHomePage } from "./compoments/footer";
import { Header } from "./compoments/header/header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Home />
      </body>
      <footer>
        <FooterHomePage />
      </footer>
    </div>
  );
}

export default App;
