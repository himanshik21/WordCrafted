import { Outlet } from "react-router-dom"
import Header from "./Header"

export const Layout = () =>{
    return(
        <div className="w-full max-w-[1200px] mx-auto h-screen py-[30px]">
        <Header />
            <Outlet />
        </div>
    )
}