import React from "react";
import { Home } from "../components";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div>
      HomePage
      <Home />
    </div>
  );
};
