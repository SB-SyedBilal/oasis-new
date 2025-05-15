import React from "react";
import { Helmet } from "react-helmet";
import HomePage from "./components/HeroSection";
import Journey from "./components/About";

const Curriculum = () => {
  return (
    <div>
      <Helmet>
        <title>Curriculum - The Oasis Academy</title>
      </Helmet>
      <HomePage />
      <Journey />
    </div>
  );
};

export default Curriculum;
