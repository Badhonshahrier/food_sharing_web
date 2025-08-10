import React from "react";
import Banner from "../Components/Banner";
import Featured__Foods from "../Components/Featured__Foods";
import Top_Doner from "../Components/Top_Doner";
import Faq from "../Components/Faq";
import Newsletter from "../Components/Newsletter";

const Home_Page = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured__Foods></Featured__Foods>
      <Top_Doner></Top_Doner>
      <Faq></Faq>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home_Page;
