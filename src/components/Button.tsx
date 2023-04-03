import React from "react"


export interface IButton extends React.HTMLAttributes<HTMLButtonElement>{
  text: string;
  icon?: JSX.Element;
  loading?: boolean;
}


export function Button(props : IButton) : JSX.Element {

  const { text, icon, className, ...otherProps } = props;

  return (
    <button className={`px-5 py-2 flex items-center justify-between  w-full shadow rounded-full font-semibold ${className}`} {...otherProps}> 
      {text} { icon }
    </button>
  );
}

export interface IButtonOrange extends IButton {
  outline?: boolean; 
}

export function ButtonOrange(props : IButtonOrange) : JSX.Element{
  
  const { outline = false, ...otherProps } = props;

  const classOutline = "text-orange-500 border border-orange-500"; 
  const classDefault = "bg-orange-500 text-white";

  return (
  <Button className={outline ? classOutline : classDefault} {...otherProps}/>
  );
}