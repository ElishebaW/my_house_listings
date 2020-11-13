import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import StudyQuiz from "./StudyQuiz";

interface Props {
  nextStudy: boolean;
}
const StudyContainer: React.FC<Props> = (props: Props) => {
  const [nextPage, setNextPage] = useState(0);
  return (
    <>
      <div>
        <Button
          onClick={() => {
            setNextPage(step => step + 1);
          }}
          color="primary"
        >
          Next Action
        </Button>
        <Button
          onClick={() => {
            setNextPage(step => step - 1);
          }}
          color="primary"
        >
          Prev Action
        </Button>
        {nextPage === 1 && <StudyQuiz></StudyQuiz>}
      </div>
    </>
  );
};

export default StudyContainer;
