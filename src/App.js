import { Container } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';

function App() {
  return (
    <Container>
          <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" exact component={Games} />
        
      </Switch>
    </Container>
    
  );
}

export default App;
