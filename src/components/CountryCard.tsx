import type { Country } from "../types/Country"

interface CountryCardProps {
    country: Country
}

const CountryCard = ({country} : CountryCardProps) => {
  return (
    <>
        <div className="bg-white dark:bg-[#2b3945] shadow-[0_0_3px_1px_#00000020] rounded-[8px] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-0.3rem]">
            <div className="w-full h-[50%] flex items-center justify-center">
                <img src={country.flags.svg} alt={`${country.name} flag`} className="w-full h-full object-cover shadow-[0_0_3px_1px_#00000020]" />
            </div>

            <div className="h-[50%] px-[clamp(1.5rem,2vw,2rem)] py-[1.5rem] flex flex-col gap-[1rem]">
                <h1 className="font-[800] text-[clamp(1.2rem,1.3vw,1.4rem)] dark:text-white">{country.name}</h1>
                <ul className="flex flex-col gap-[0.5rem]">
                    <li className="font-[600] flex items-center gap-[0.5rem] dark:text-white">Population: <span className="font-[300] text-[clamp(0.9rem,1vw,1rem)]">{country.population}</span></li>
                    <li className="font-[600] flex items-center gap-[0.5rem] dark:text-white">Region: <span className="font-[300] text-[clamp(0.9rem,1vw,1rem)]">{country.region}</span></li>
                    <li className="font-[600] flex items-center gap-[0.5rem] dark:text-white">Capital: <span className="font-[300] text-[clamp(0.9rem,1vw,1rem)]">{country.capital}</span></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default CountryCard