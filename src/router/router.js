import { createBrowserRouter } from "react-router-dom";

import Default from "../screens/Default";
import Product from "../screens/Product";
import App from "../App";
import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    { 
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage /> 
            },
            { 
                path: '/default', 
                element: <Default /> 
            },
            { 
                path: '/product', 
                element: <Product /> 
            },
            { 
                path: '/login', 
                element: <LoginForm /> 
            },
        ]
    }
],
    {
        basename: basename
    }
);

export default routes;