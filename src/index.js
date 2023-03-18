import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';

ReactDOM.render(
<BrowserRouter> 
   <GoogleOAuthProvider clientId='892958478339-vadla0jpfrvj1ui68gk3gk8turm5qu36.apps.googleusercontent.com'>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
</BrowserRouter>


document.getElementById('root')


);
reportWebVitals();