import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import './index.css'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/projects',
                element: <Projects />
            },
            {
                path:'/contact',
                element: <Contact />
            },

        ]
    }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
);