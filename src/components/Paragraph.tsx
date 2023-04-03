
export interface IParagraph {
  text: string; 
  color?: string; 
}

export default function Paragraph({ text, color = "text-gray-400" } : IParagraph) {
  return <p className={`text-lg ${color}`}>{text}</p>
}