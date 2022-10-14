import Header from 'components/Header';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
