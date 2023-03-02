import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Patients from "../Pages/Patients/Patients";
import UpdatePatient from "../Pages/Patients/UpdatePatient";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/patients",
                element: <Patients />
            },
            {
                path: "/updatePatient/:id",
                element: <UpdatePatient />,
                loader: async ({ params }) => {
                    return fetch(`https://softnerve-server-five.vercel.app/updatePatient/${params?.id}`)
                }
            }
        ]
    }
])