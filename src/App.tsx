import './stylesheets/scss/global.scss';
import { Home } from './pages/Home';
import { Header } from './components/header/Header';
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import { Market } from './pages/Market';
import { Groups } from './pages/Groups';
const App = () => {
  return (
     <>
       <Router>
          <Header />
             <Switch>
                <Route exact path="/">
                   <Home />
                </Route>

                <Route path="/market">
                   <Market />
                </Route>

                <Route path="/groups">
                   <Groups />
                </Route>
             </Switch>
       </Router>
     </>
  );
}

export default App;
