import React from "react";
import { Link, useParams } from "react-router-dom";
import { demoStandards } from "../store";
import { Card } from "../components";
import { demoImage, demoNote } from "../assets";

interface NotePageProps {}

export const NotePage: React.FC<NotePageProps> = (props) => {
  const {
    subjectParam: standard,
    topicParam: subject,
    noteParam: topic,
  } = useParams();
  return (
    <div>
      NotePage
      <p>{standard}</p>
      <p>{subject}</p>
      <p>{topic}</p>
      <ul>
        {demoStandards
          ?.filter((item) => item.title === standard)[0]
          ?.availableSubjects?.filter((item) => item.title === subject)[0]
          .availableTopics?.filter((item) => item.title === topic)[0]
          .availableNotes.map((note, idx) => {
            return (
              <Link key={idx} to={demoNote}>
                <li>
                  <Card
                    title={note.title}
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
