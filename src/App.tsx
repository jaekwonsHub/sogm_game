import { useParams, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AnswerView from './components/4_pages/AnswerView';
import GameView from './components/4_pages/GameView';
import HomePage from './components/4_pages/Home';

function GameStage() {
  let { id } useParams();
}


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/game/" component={GameView} exact={true} />
        <Route path="/game/:id" component={GameView} exact={true} />
        <Route path="/answer" component={AnswerView} exact={true} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

