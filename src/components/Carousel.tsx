
import pedreiro from '../images/pedreiro.webp';
import pintor from '../images/construcao.jpg';
import ipermealizacao from '../images/telhado.jpeg';
import drywall from '../images/pisos.jpeg';

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
      description: "Mão de obra especializada para fornecer as melhores soluções desde o projeto a entrega das chaves.",
      image: pintor
    },
    {
      id: 2,
      title: "Reforma",
      description: "Equipe qualificada para dar cara nova ao seu imóvel em todos os aspectos necessários.",
      image: pedreiro
    },
    {
      id: 3,
      title: "Telhado",
      description: "Executamos diversos tipos de telhados e formatos que que possam atender a necessidade do cliente.",
      image: ipermealizacao
    },
    {
      id: 4,
      title: "Pisos e azulejos",
      description: "Assentamento de pisos, azulejos, porcelanatos e diversos outros revestimentos. Acabamento de altíssima qualidade.",
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
