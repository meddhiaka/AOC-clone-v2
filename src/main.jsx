import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Team from './UI/Team';
import Contact from './UI/Contact';
import About from './UI/About';
import NotFound from './UI/NotFound';
import Events from './UI/Events';
import Carousel from './UI/Sub/Carousel';
import Event from './UI/Event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/events/:id',
    element: <Event />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
