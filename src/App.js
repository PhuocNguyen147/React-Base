import './App.scss'
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";


const App = () => {
  return (
    <div className="App-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-container">
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
}


export default App;