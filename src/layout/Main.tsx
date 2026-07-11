import React from "react";
import data from '../data.json';
import Filter from "../components/Filter";

const Main = () => {
  return (
    <>
      
      <main className="flex py-[clamp(2rem,2.5vw,3rem)] bg-[#fcfcfc]">
        <Filter />  
        <section className="grid">

        </section>
      </main>
    </>
  );
};

export default Main;
