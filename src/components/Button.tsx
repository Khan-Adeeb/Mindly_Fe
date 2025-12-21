import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "ghost" | "danger";
  text: string;
  size: "sm" | "md" | "lg";
  onclick?: () => void;
  isDisable?: boolean;
  startIcon?: ReactElement;
  fullWidth?: boolean;
}

const variantStyle = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
  outline:
    "border-[1.5px] border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700",
  ghost: "text-gray-700 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeStyle = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-6 py-3",
};

const defaultStyles =
  "flex justify-center items-center rounded-lg gap-2 m-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed";

function button(props: ButtonProps) {
  return (
    <button
      disabled={props.isDisable}
      onClick={props.onclick}
      className={`${variantStyle[props.variant]} ${sizeStyle[props.size]} ${
        props.fullWidth ? "w-full" : ""
      } ${defaultStyles}`}
    >
      {props.startIcon}
      {props.text}
    </button>
  );
}

export default button;
