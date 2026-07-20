import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState("Filter by Region");

  return (
    <>
      <div className="px-[clamp(1rem,5vw,5rem)] w-full flex flex-col gap-[2rem] justify-between md:flex-row ">
        <div className="flex items-center gap-[1rem] bg-white dark:bg-[#2b3945] py-[1rem] px-[1.5rem] text-[clamp(1rem,1.1vw,1.1rem)] shadow-[0_2px_3px_1px_#00000020] rounded-[5px]">
          <FaSearch className="text-[#808080] dark:text-white" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for a country..."
            className="w-full text-[#808080] dark:text-white"
          />
        </div>

        <div className="w-[12rem] md:w-[15rem] relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-between bg-white dark:bg-[#2b3945] dark:text-white p-[1rem] w-full rounded-[8px] shadow-[0_2px_3px_2px_#00000010] cursor-pointer"
          >
            {region}
            <BiChevronDown className={`transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
          </button>
          <ul className={`absolute z-10 w-full flex flex-col gap-[0.5rem] bg-white dark:bg-[#2b3945] dark:text-white px-[0.5rem] py-[1rem] rounded-[10px] shadow-[0_2px_3px_2px_#00000010] transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-[0.5rem] pointer-events-auto" : "opacity-0 translate-y-[-1rem] pointer-events-none"}`}>
            <li onClick={() => { setIsOpen(false); setRegion('Africa') }} className="cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-250 ease-in-out hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Africa</li>
            <li onClick={() => { setIsOpen(false); setRegion('America') }} className="cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-250 ease-in-out hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">America</li>
            <li onClick={() => { setIsOpen(false); setRegion('Asia') }} className="cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-250 ease-in-out hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Asia</li>
            <li onClick={() => { setIsOpen(false); setRegion('Europe') }} className="cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-250 ease-in-out hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Europe</li>
            <li onClick={() => { setIsOpen(false); setRegion('Oceania') }} className="cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-250 ease-in-out hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Oceania</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
