import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"
import SinglePost from "../src/components/SinglePost/SinglePost"
import Post from "../src/components/Post/Post"
import Project from "../src/components/Project/Project"
import NavBar from "./components/NavBar/NavBar"
function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Switch>
   <Route component={Home} path="/" exact />
   <Route component={About} path="/about"  />
   <Route component={SinglePost} path="/post/:slug"/>
   <Route component={Post} path="/Post"  />
   <Route component={Project} path="/project" />
   </Switch>
   </BrowserRouter>
    </>
  );
}

export default App;

