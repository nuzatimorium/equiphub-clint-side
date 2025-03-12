import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddEquipment from "../Pages/AddEquipment";
import PrivetRoute from "./PrivateRoute";
import AllEquipments from "../Pages/AllEquipments";
import EquipmentDetails from "../Pages/EquipmentDetails";
import MyEquipmentList from "../Pages/MyEquipmentList";
import UpdateEquipment from "../Pages/UpdateEquipment";
import NotFound from "../Pages/NotFound";

const Routes =createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-equipment",
                element: <PrivetRoute><AddEquipment></AddEquipment></PrivetRoute>
            },
            {
                path: "/all-sports-equipment",
                element: <AllEquipments></AllEquipments>
            },
            {
                path: "/equipments/:id",
                element: <PrivetRoute><EquipmentDetails></EquipmentDetails></PrivetRoute>
            },
            {
                path: "/my-equipment",
                element: <PrivetRoute><MyEquipmentList></MyEquipmentList></PrivetRoute>
            },
            {
                path: "/update/:id",
                element: <PrivetRoute><UpdateEquipment></UpdateEquipment></PrivetRoute>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])

export default Routes;