import React from "react";
import { Card } from "../card";
import { Link } from "react-router-dom";
import { demoStandards } from "../../store";
import { demoImage } from "../../assets";
export const Home = () => {
  return (
    <div className="px-12 mx-auto max-w-7xl">
      <div className="flex items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">JPEXAMATE</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            cumque neque, ratione eveniet beatae nostrum ipsam veniam laborum
            culpa odit enim, perspiciatis expedita. Iste recusandae minus qui
            eaque ullam provident!
          </p>
        </div>
        <div>
          <img src={demoImage} alt="img" />
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {demoStandards.map((item, idx) => (
          <Link key={idx} to={`./subjects/${item.title}`}>
            <li>
              <Card
                title={item.title}
                content={
                  <div className="w-8 h-12">
                    <img src={demoImage} alt="img" />
                  </div>
                }
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
