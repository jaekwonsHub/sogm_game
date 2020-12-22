import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Answer from './components/4_pages/Answer';
import Game from './components/4_pages/Game';
import Home from './components/4_pages/Home';
import Result from './components/4_pages/Result';
// import Snowfall from 'react-snowfall'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from "react"

const theme = extendTheme({
  fonts: {
  }
})

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ChakraProvider theme={theme} >
          <audio id="bgm_question" loop >
            <source src={process.env.PUBLIC_URL + "/sounds/questionSound.mp3"} type="audio/mpeg" />
          </audio>
          <audio id="bgm_result" loop >
            <source src={process.env.PUBLIC_URL + "/sounds/resultSound.mp3"} type="audio/mpeg" />
          </audio>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/game/:id" component={Game} exact={true} />
            <Route path="/answer/:id" component={Answer} exact={true} />
            <Route path="/result" component={Result} exact={true} />
            <Redirect path="*" to="/" />
          </Switch>
        </ChakraProvider>
      </BrowserRouter >
    );
  }
}

export default App;

