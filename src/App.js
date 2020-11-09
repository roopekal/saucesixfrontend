import React from 'react';
import Form from './components/Form'
import RadioButtonKysymys from './components/RadioButtonKysymys'
import MenuMUI from './components/Navigation'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { ArrowDownward } from '@material-ui/icons';
import { lightBlue, brown, amber, common, deepPurple, green, purple } from '@material-ui/core/colors';
import FetchRadio from './components/FetchRadio'


const theme = createMuiTheme({
    palette: {
  primary: {main: '#000', contrastText: '#FFFFFF'},
  secondary: {main: deepPurple[300], contrastText: lightBlue[50]},
  text: {primary: '#000', secondary: brown[200] },
  background: {default: deepPurple[400]},
  
    },
  });



function App() {
  return(
    <BrowserRouter>
            <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <MenuMUI/>
                <Switch>
                  <Route path='/' exact component={Form}/>
                  <Route path='/radio' component={FetchRadio} />
                </Switch>
                </div>
    
                </MuiThemeProvider>
                </BrowserRouter>
    );
}

export default App;
