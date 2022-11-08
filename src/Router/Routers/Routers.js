import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import AllImgCatagory from "../../pages/ServiceCagagory/AllImgCatagory";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../LayOut/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/servicecatagory',
                element: <AllImgCatagory></AllImgCatagory>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;
