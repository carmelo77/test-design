import './App.scss';

/** Components */
import SidebarComponent from './Components/SidebarComponent';
import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <div className="App">
      <SidebarComponent />
      <div className="main-content">
        <HeaderComponent />
        <MainComponent />
        <footer>
          <div>
            <span>
              Copyright @2021 Clínica San Felipe
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
