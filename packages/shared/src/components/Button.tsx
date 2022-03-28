import { FC } from "react";

type Props = {
  color: string;
};

const Button: FC<Props> = ({ color }) => {
  return <button style={{ color }}>Button Shared</button>;
};

export default Button;
