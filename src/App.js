import './App.css';
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from './components/NavBar/NavBarComponent';
import CuerpoComponent from './components/Body/CuerpoComponent';

// RENDER

function App() {
  return (
   <div style={{padding: 0}}>
     <NavBarComponent/>
     <CuerpoComponent/>
   </div>
  );
}

export default App;
