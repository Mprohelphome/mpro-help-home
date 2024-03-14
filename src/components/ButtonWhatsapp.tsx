import Link from "next/link";
import { IoLogoWhatsapp } from 'react-icons/io';

export default function ButtonWhatsapp() : JSX.Element {
  const number = "552134003368";
  const text = "Olá, gostaria de solicitar um atendimento."; 

  return (
    <Link className="fixed bg-white rounded-full right-16 bottom-10 z-30" id="whatsapp-fluttuante" href={"https://wa.me/" + number + "?text=" + text} target="_blank" aria-label="Gostaria de solicitar um orçamento de construção.">
       <span className="animate-ping delay-150 absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <IoLogoWhatsapp className="text-green-500" size={56}/>
    </Link>
  );
}