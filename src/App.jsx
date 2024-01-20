import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import routes from './routes';
// import MainLayout from './layouts/MainLayout';
// import ErrorPage from './pages/ErrorPage';
// import './App.css';

import Home from './components/Home';

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
        <>
        <h1>New Portfolio</h1>
        <Home />
        </>

    );
}

export default App
