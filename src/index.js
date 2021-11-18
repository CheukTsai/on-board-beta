import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import { Provider } from 'react-redux'
import store from 'commons/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styling/app.css'


ReactDOM.render(
    <Provider store={store}>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />
        <Router />
    </Provider>,
    document.getElementById('root')
);
