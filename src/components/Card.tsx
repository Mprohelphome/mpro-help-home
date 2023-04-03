

type colors = "orange" | "default";

export interface ICard {
  color: colors;
  children: string | JSX.Element | JSX.Element[]
  className?: string | null | undefined;
}

export default function Card({ color = 'default', className = null, children} : ICard) : JSX.Element {
  return (
    <div className={`p-8 shadow-lg flex flex-col gap-5 rounded-2xl ${className} ${color == 'orange' && 'shadow-orange-100'}`}>
      {children}
    </div>
  );
}