import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Tech from './components/Tech';
import Resume from './components/Resume';
import NoMatch from './components/NoMatch';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/WebDev",
        element: <Home />,
        loader: salesLoader
      },
      {
        path: "catalog/:catalogID",
        element: <GoodsPage />,
        loader: goodsLoader,
      },
      {
        path: ":catalog/:goodID",
        element: <GoodPage />,
        loader: goodLoader
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'order',
        element: <Order />
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('develop'));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
