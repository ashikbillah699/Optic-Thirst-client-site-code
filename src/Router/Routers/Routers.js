import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Ditails from "../../pages/Ditails/Ditails";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import AllImgCatagory from "../../pages/ServiceCagagory/AllImgCatagory";
import SignUp from "../../pages/SignUp/SignUp";

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
                path: '/details/:id',
                element: <Ditails></Ditails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>,
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }

        ]
    }
])

export default router;
