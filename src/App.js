import  Appbar  from "../src/components/appbar/appbar"
import Header from "../src/components/header/header"
import Particles from "react-particles-js"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import "../src/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
   <>
   <Particles
   className="particles-canvas"
   params={{
     particles:{
       number:{
         value:30,
         density:{
           enable:true,
           value_area:900,
         }
       },
       shape:{
         type:"square",
         stroke:{
           width:6,
           color:"#f9ab00"
         }
       }
     }
   }}
   />
    <Appbar/>
    <Header/>
    </>
  );
}

export default App;
