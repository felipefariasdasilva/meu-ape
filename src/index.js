import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import MainContainer from './containers/MainContainer';


ReactDOM.render(
  <MainContainer>
    <Routes />
  </MainContainer>,
  document.getElementById('root')
)
