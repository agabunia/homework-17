import Layouts from "./layouts/Layouts";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import FactsPage from "./pages/FactsPage";
import MainPage from "./pages/MainPage";


const router = [
    {
        element: <Layouts />,
        path: '/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <AboutPage />,
                path: 'about'
            },
            {
                element: <FactsPage />,
                path: '/:factId'
            }
        ]
    },
    
    {
        element: <ErrorPage />,
        path: '*'
    }
]

export default router