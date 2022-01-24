import React from "react";
interface Props {
  title: string;
}

function Foo({ title }: Props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{title}</h1>
    </div>
  );
}

export default Foo;
