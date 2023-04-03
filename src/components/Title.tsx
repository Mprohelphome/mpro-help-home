
type colors = 'orange' | 'blue' | 'white';

export interface ITitle {
  text: string;
  size?: 'xs' | 'md' | 'lg';
  color?: colors
}

const baseClassName = "font-bold";


const Biggest = (props : ITitle) => <h1 className={`${baseClassName} text-4xl ${props.color}`}>{props.text}</h1>
const Medium = (props : ITitle) => <h2 className={`${baseClassName} text-xl ${props.color}`}>{props.text}</h2>
const Small = (props : ITitle) => <h3 className={`${baseClassName} text-lg ${props.color}`}>{props.text}</h3>

export default function Title({text, size = 'md', color = 'blue' } : ITitle) : JSX.Element{
  
 const colors : {[key: string] : string}  = {
  'orange': 'text-[#F58634]',
  'blue': 'text-[#00285B]',
  'white': 'text-white',
 }

 if(size == "xs")
  return <Small color={colors[color]} text={text}/>

 if(size == "md")
  return <Medium color={colors[color]} text={text}/>

  return <Biggest color={colors[color]} text={text}/>
}