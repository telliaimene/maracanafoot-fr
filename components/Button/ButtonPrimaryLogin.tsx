import Button, { ButtonProps } from "../../components/Button/Button";
import React from "react";
export interface ButtonPrimaryProps extends ButtonProps {}
const ButtonPrimaryLogin: React.FC<ButtonPrimaryProps> = ({
  className = "",
  children,
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
    >
      {children}
      </Button>
  );
};
export default ButtonPrimaryLogin;