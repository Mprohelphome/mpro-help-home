import { HTMLAttributes } from "react";


export interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export default function Input(props : IInput) : JSX.Element {

  const { invalid = false, ...more } = props;

  return (<input  {...more}  className="p-2 rounded-full shadow-sm border-2  outline-none focus:border-orange-500"/>);
}