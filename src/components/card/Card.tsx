import React from "react";
interface CardProps {
  title: string;
  content: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, content }) => {
  const _class = title[title.length - 1];
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 inline-block">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>{content}</div>
    </div>
  );
};
