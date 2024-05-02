import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { FooterHomePage } from "./compoments/footer";
import { Header } from "./compoments/header/header";
import ErrorPage from "./error-page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Outlet />
      </body>
      <footer>
        <FooterHomePage />
      </footer>
    </div>
  );
}
// function App() {
//   return (
//     <BrowserRouter future={{ v7_startTransition: true }}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/*" errorElement={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
