import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import routes from './routes';
// import MainLayout from './layouts/MainLayout';
// import ErrorPage from './pages/ErrorPage';
// import './App.css';

import MainNavMenu from './components/menu/MainNavMenu';
import Home from './components/Home';
import MainLayout from './layouts/MainLayout';
import router from './routes/router';

function App() {
//   const router = createBrowserRouter([
//     {
//       element: <MainLayout />,
//       errorElement: <ErrorPage />,
//       children: routes,
//     }
//   ]);

//   return <RouterProvider router={router} />
    return (
        <RouterProvider router={router} />
    );
}

export default App
