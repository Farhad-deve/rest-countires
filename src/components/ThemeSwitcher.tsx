import { useState } from "react";
import { BsMoon } from "react-icons/bs"; 


const ThemeSwitcher = () => {
    

    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');
    }

  return (
    <>
        <button onClick={toggleTheme}
        className="flex items-center justify-between font-[600] gap-[0.3rem] cursor-pointer
        transition-all duration-300 ease-in-out text-black dark:text-white">
            <BsMoon />
            Dark Mode
        </button>
    </>
  )
}

export default ThemeSwitcher