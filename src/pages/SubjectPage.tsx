import React from "react";
import { useParams } from "react-router-dom";

interface SubjectPageProps {}

export const SubjectPage: React.FC<SubjectPageProps> = (props) => {
  const { _class } = useParams();
  return (
    <div>
      SubjectPage
      <p>Class-{_class}</p>
    </div>
  );
};
