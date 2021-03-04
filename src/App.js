import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
import Navbar from './components/Navbar';
import SingleUser from './pages/SingleUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home}></Route>
        <Route path="/about" component={about}></Route>
        <Route path="/:username" component={SingleUser}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
