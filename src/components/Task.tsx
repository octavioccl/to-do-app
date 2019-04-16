import * as React from "react";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onClick: (id: number) => void;
  removeTask: (id: number) => void;
}

export const TaskItem: React.FC<Props> = props => {
  const { id, title, completed, onClick, removeTask } = props;

  const toggleTask = () => {
    onClick(id);
  };
  const remove = () => {
    removeTask(id);
  };
  return (
    <li>
      <div className="task">
        <p  style={{textDecoration: completed ? "line-through" : "none", background: completed?"yellow":"white"}}> {title}</p>
        <div>
          <button onClick={toggleTask}>Complete</button>
          <button onClick={remove}>x</button>
        </div>
      </div>
    </li>
  );
};
