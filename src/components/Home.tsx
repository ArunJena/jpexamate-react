import React from "react";
import { Card } from "./card";
export const Home = () => {
  const items = ["Class-8", "Class-9", "Class-10", "Class-11", "Class-12"];
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
          <img
            src="https://images.unsplash.com/photo-1705518648497-e4ea72bcb27d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
          />
        </div>
      </div>

      {items.map((item, idx) => (
        <Card
          key={idx}
          title={item}
          content={
            <div className="w-8 h-12">
              <img
                src="https://images.unsplash.com/photo-1705518648497-e4ea72bcb27d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />
            </div>
          }
        />
      ))}
    </div>
  );
};
