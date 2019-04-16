import * as React from "react";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onClick: (id: number) => void;
}

export const TaskItem: React.FC<Props> = props => {
  const { id, title, completed, onClick } = props;

  const toggleTask = () => {
    onClick(id);
  };

  return (
    <li
      onClick={toggleTask}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {title}
    </li>
  );
};
