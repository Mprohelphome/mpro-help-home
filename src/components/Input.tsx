import { HTMLAttributes } from "react";


export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export default function Input(props : IProps) : JSX.Element {

  const { invalid = false, ...more } = props;

  return (<input  {...more}  maxLength={75} className="p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500"/>);
}