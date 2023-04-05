
import pedreiro from '../images/pedreiro.webp';
import pintor from '../images/pintor.webp';
import ipermealizacao from '../images/ipermealizacao.webp';
import drywall from '../images/drywall.webp';

import Image from 'next/image';
import Title from './Title';
import Paragraph from './Paragraph';
import { motion } from 'framer-motion';

interface IService {
  id: number;
  title: string;
  description: string;
  image: any
}

export default function Carousel() : JSX.Element {


  const services : IService[] = [
    {
      id: 1,
      title: "Construção",
      description: "Pintores qualificados para atuar com diversos tipos de superfície, material e condições, inclusive em altura.",
      image: pintor
    },
    {
      id: 2,
      title: "Reforma",
      description: "Nossos pedreiros possuem experiência em diversas áreas da construção civil, estão aptos a atuar com todo tipo de obras.",
      image: pedreiro
    },
    {
      id: 3,
      title: "Impermealizacao",
      description: "Os profissionais Help Home estão aptos a atender qualquer tipo de infiltração, onde efetuamos o teste de estanqueidade.",
      image: ipermealizacao
    },
    {
      id: 4,
      title: "Gesso e DryWall",
      description: "Faça um contato com a Help Home e solicite um gesseiro profissional e capacitado tecnicamente para sua obra de redoma e construção.",
      image: drywall
    },
  ]

  return (
    /* flex w-full py-8 overflow-x-scroll no-scrollbar lg:grid lg:grid-cols-2 */
    <div className="flex w-full overflow-x-scroll no-scrollbar py-2">
        <div className="flex flex-nowrap  md:flex-wrap md:gap-3 ml-3">
          {services.map(({id, title, description, image} : IService) => (
            <motion.div key={title} className="inline-block px-3"
            initial={{ opacity: 0}} 
            animate={{ opacity: 1}} 
            transition={{ duration: 0.3 * id, delay: id * 0.5 }}>
              <div
                className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image src={image} className='h-48' alt={description}/>
                <div className="flex w-full p-2 flex-col gap-2">
                  <Title text={title}/>
                  <Paragraph text={description}/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  );
}
