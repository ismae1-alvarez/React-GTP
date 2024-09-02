import { RouterProvider } from "react-router-dom";
import { router } from "./presantation/router/router";

export default function ReactGTP() {
  return (
    <RouterProvider router={router}/>
  )
}