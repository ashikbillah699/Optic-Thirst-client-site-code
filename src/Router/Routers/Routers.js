import Blog from "../../pages/Blog/Blog";
import Ditails from "../../pages/Ditails/Ditails";
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
            },
            {
                path: '/details',
                element: <Ditails></Ditails>
            }
        ]
    }
])

export default router;
