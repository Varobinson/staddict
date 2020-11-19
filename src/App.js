import { Container } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Match from './pages/Match';

function App() {
  return (
    <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games/:leagueId" exact component={Games} />
          <Route path="/games/match/:fixtureId" exact component={Match} />      
        </Switch>
    </Container>
    
  );
}

export default App;
