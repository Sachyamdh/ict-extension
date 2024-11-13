import React from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  content?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  type,
  onClick,
  disabled,
  content,
  children,
}) => {
  return (
    <button style={style} type={type} onClick={onClick} disabled={disabled}>
      {content}
      {children}
    </button>
  );
};
