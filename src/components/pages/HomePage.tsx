import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import SimpleMenu from "../atoms/pul";
import ContainedButtons from "../atoms/buttom";
import SimplePaper from "../atoms/Paper";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title="Tokyo_DartsBar">
      <img src="/images/title.png" />
      <>検索してみよう</>
      <SimpleMenu />
      <ContainedButtons />
      <SimplePaper/>
    </GenericTemplate>
  );
};

export default HomePage;
