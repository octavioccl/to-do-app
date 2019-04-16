import * as React from "react";

interface Props {
  active: boolean;
  onClick: () => void;
}

export const Link: React.FC<Props> = props => {
  const { active, onClick, children } = props;

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px"
      }}
    >
      {children}
    </button>
  );
};
