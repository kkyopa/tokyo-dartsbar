import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
// import ContainedButtons from "../atoms/buttom";
import SimplePaper from "../atoms/Paper";
import Search from "../molecules/Search";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title="Tokyo_DartsBar">
      <img src="/images/title.png" />
      <>検索してみよう</>
      <Search />
      <SimplePaper/>
    </GenericTemplate>
  );
};

export default HomePage;
