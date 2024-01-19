import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import { demoStandards } from "../store";
import { Card } from "../components";
import { demoImage } from "../assets";
interface SubjectPageProps {}

export const SubjectPage: React.FC<SubjectPageProps> = (props) => {
  const { subjectParam: standard } = useParams();
  return (
    <div>
      SubjectPage
      <p>{standard}</p>
      <ul>
        {demoStandards
          .filter((item) => item.title === standard)[0]
          .availableSubjects?.map((subject, idx) => {
            return (
              <Link key={idx} to={`./topics/${subject.title}`}>
                <li>
                  <Card
                    title={subject.title}
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
