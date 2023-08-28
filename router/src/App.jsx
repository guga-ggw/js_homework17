import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Router from './Routers/Router';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <RouterProvider router={createBrowserRouter(Router)}/>
    </div>
  );
}

export default App;
