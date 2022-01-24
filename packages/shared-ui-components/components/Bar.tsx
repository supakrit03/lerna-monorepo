import React from "react";

interface Props {
  title: string;
}

function Bar({ title }: Props) {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>{title}</h1>
    </div>
  );
}

export default Bar;
