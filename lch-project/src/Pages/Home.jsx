import React from "react";
import Header from "../Components/Header";
import SpecialityMenu from "../Components/SpecialityMenu";
import TopDoctors from "../Components/TopDoctors";

function Home() {
  return (
    <div className="">
      <Header></Header>
      <SpecialityMenu></SpecialityMenu>
      <TopDoctors></TopDoctors>
    </div>
  );
}

export default Home;
