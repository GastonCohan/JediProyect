import './App.css';
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from './components/NavBar/NavBarComponent';
import CuerpoComponent from './components/Body/CuerpoComponent';

// RENDER

function App() {
  return (
  <div className="PageContainer">
    <div id="NavBar">
      <NavBarComponent/>
    </div>
    <div id="bodyContainer">
      <CuerpoComponent/>
    </div>
  </div>
  );
}

export default App;
