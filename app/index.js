import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Main } from "./features/main/containers/Main";
injectTapEventPlugin()
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
          <Main/>
      </MuiThemeProvider>
    );
  }

}

render(<App/>, window.document.getElementById("app"));
