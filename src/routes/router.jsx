import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '@/pages/main/MainPage';
import SkillsPage from '../pages/skills/SkillsPage';
import WorkPage from '../pages/work/WorkPage';
import AboutPage from '../pages/about/AboutPage';
import ContactsPage from '../pages/contacts/ContactsPage';
import AssetsPage from '../pages/assets/AssetsPage';
import CvPage from '../pages/cv/CvPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                element: <SkillsPage />,
                path: '/skills'
            },
            {
                element: <WorkPage />,
                path: '/work'
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contacts',
                element: <ContactsPage />
            },
            {
                path: '/assets',
                element: <AssetsPage />
            },
            {
                path: '/cv',
                element: <CvPage />
            },
        ]
    },
]);

export default router;
