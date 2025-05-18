import { Link } from "react-router-dom";

export default function Header (){
    return (
      <>
        <header className="flex w-full justify-between items-center bg-gray-300">
          <h1 className="text-[32px] font-bold">
            <Link to="/">WordCrafted</Link>
          </h1>

          <nav className="flex gap-[30px]">
            <p className="text-[22px]">
              <Link to="/login">Login</Link>
            </p>
            <p className="text-[22px]">
              <Link to="/register">Register</Link>
            </p>
          </nav>
        </header>
      </>
    );  
}