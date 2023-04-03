
import pedreiro from '../images/pedreiro.webp';
import pintor from '../images/pintor.webp';
import ipermealizacao from '../images/ipermealizacao.webp';
import drywall from '../images/drywall.webp';

import Image from 'next/image';
import Title from './Title';
import Paragraph from './Paragraph';

interface IService {
  title: string;
  description: string;
  image: any
}

export default function Carousel() : JSX.Element {


  const services : IService[] = [
    {
      title: "Construção",
      description: "Pintores qualificados para atuar com diversos tipos de superfície, material e condições, inclusive em altura.",
      image: pintor
    },
    {
      title: "Reforma",
      description: "Nossos pedreiros possuem experiência em diversas áreas da construção civil, estão aptos a atuar com todo tipo de obras.",
      image: pedreiro
    },
    {
      title: "Impermealizacao",
      description: "Os profissionais Help Home estão aptos a atender qualquer tipo de infiltração, onde efetuamos o teste de estanqueidade.",
      image: ipermealizacao
    },
    {
      title: "Gesso e DryWall",
      description: "Faça um contato com a Help Home e solicite um gesseiro profissional e capacitado tecnicamente para sua obra de redoma e construção.",
      image: drywall
    },
  ]

  return (
    
    <div className="flex w-full py-8 overflow-x-scroll no-scrollbar">
        <div className="flex flex-nowrap ml-3">
          {services.map(({title, description, image} : IService ) => (
            <div className="inline-block px-3">
              <div
                className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image src={image} className='h-48' alt={description}/>
                <div className="flex w-full p-2 flex-col gap-2">
                  <Title text={title}/>
                  <Paragraph text={description}/>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

/* 
 {services.map(({title, description, image} : IService) => (
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image   className="w-full" src={image} alt={description}/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                {description}
              </p>
            </div>
          </div>
          ))} 

*/