import { BiSearchAlt } from "react-icons/bi"; 
import React from 'react'

const Filter = () => {
  return (
    <>
        <div className="px-[clamp(1rem,5vw,5rem)] w-full flex flex-col gap-[2rem] justify-between md:flex-row ">
            <div className="flex items-center gap-[1rem] px-[1rem] bg-white py-[1rem] px-[1.5rem] text-[1.2rem] shadow-[0_2px_3px_1px_#00000020] rounded-[5px]">
                <BiSearchAlt />
                <input type="text" name="" id="" placeholder="Search for a country..."
                    className="w-full"
                />
            </div>

            <div>
                <select name="continent" id="">
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default Filter