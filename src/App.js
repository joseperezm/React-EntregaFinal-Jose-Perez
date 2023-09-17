import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <NavBar />
          <Main />
          <Footer />
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
