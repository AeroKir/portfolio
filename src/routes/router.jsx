import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <>Home</>
    },
    {
        path: '/about',
        element: <>About me page</>
    }
]);

export default router;
