import React from "react";
import Logo from "../../images/logo5.png";
import { HeaderContainer } from "./styles";
import BackgroundHeader from "../BackgroundHeader"
export default function Header() {
  const [darkToggle, setDarkToggle] = React.useState(false);
  return (
    <>
      <HeaderContainer>
       <BackgroundHeader/>
        <header className={` flex flex-col p-0 bg-white-100 mb-2 ${darkToggle && "dark"}`}>
        <label className="toggleDarkBtn mt-4 left-2">
          <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
          <span className="slideBtnTg round"></span>
         
         
        </label>
        <div className="flex justify-center bg-gray-100 p-1 mt-2 text-white dark:bg-gray-900">
            <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
          
            </div>
            <img classNameNameName="img-fluid" src={Logo} alt="Logo" />
            <h1 classNameNameName="text-center text-3xl"></h1>
            <p className="text-gray-800 dark:text-gray-200"></p>
          </div>
         
        </header>
      </HeaderContainer>
      <div>
        {/*Dark mode tailwindcss*/}

        {/*Dark mode tailwindcss*/}
      </div>
    </>
  );
}
