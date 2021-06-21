import './App.css';
import "semantic-ui-css/semantic.min.css"

// COMPONENTS

import NavBarComponent from './components/NavBar/NavBarComponent';
import CuerpoComponent from './components/Body/CuerpoComponent';

// RENDER

function HomeScreen() {
  return (
  <div className="PageContainer">
    <div id="NavBar" >
      <NavBarComponent/>
    </div>
    <div className="BodyContainer">
      <CuerpoComponent/>
    </div>
  </div>
  );
}

export default HomeScreen;








// class App extends React.Component {
//   render() {
//     return(
//       <Router history={browserHistory}>
//         <Rout path={"/"} component={Rout}>
//           <IndexRoute component={HomeScreen}/>

//         </Rout>
//       </Router>
//     )
//   }
  
// }


