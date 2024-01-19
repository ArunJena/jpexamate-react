import React from "react";
import { Link, useParams } from "react-router-dom";
import { demoStandards } from "../store";
import { Card } from "../components";
import { demoImage } from "../assets";

interface TopicPageProps {}

export const TopicPage: React.FC<TopicPageProps> = (props) => {
  const { subjectParam: standard, topicParam: subject } = useParams();

  return (
    <div>
      TopicPage
      <p>{standard}</p>
      <p>{subject}</p>
      <ul>
        {demoStandards
          ?.filter((item) => item.title === standard)[0]
          ?.availableSubjects?.filter((item) => item.title === subject)[0]
          .availableTopics.map((topic, idx) => {
            return (
              <Link key={idx} to={`./notes/${topic.title}`}>
                <li>
                  <Card
                    title={topic.title}
                    content={
                      <div className="w-8 h-12">
                        <img src={demoImage} alt="img" />
                      </div>
                    }
                  />
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};
