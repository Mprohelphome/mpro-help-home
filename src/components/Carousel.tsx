
import pedreiro from '../images/pedreiro.webp';
import pintor from '../images/construcao.jpg';
import ampliacao from '../images/ampliacao.webp';
import drywall from '../images/pisos.jpeg';
import energiasolar from '../images/energia-solar.webp';
import acabamentodecoracao from '../images/acabamento-e-decoracao.webp';

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
      description: "Realize o sonho da sua casa própria ou dê vida ao seu projeto comercial com nossos serviços de construção. Oferecemos desde a tradicional construção convencional até métodos modernos como o pré-moldado e estruturas em steel frame e wood frame.",
      image: pintor
    },
    {
      id: 2,
      title: "Reforma",
      description: "Transforme seu espaço com nossos serviços de reforma. Seja para modernizar sua residência, revitalizar seu espaço comercial ou restaurar um patrimônio histórico, estamos aqui para ajudar. Aproveite para atualizar seu sistema de ar condicionado, garantindo maior conforto e eficiência energética.",
      image: pedreiro
    },
    {
      id: 5,
      title: "Energia Solar",
      description: "Torne seu imóvel mais sustentável e econômico com nossos sistemas de energia solar. Oferecemos soluções completas para instalação de painéis solares, garantindo uma fonte de energia limpa e renovável para sua casa ou negócio. Reduza sua pegada ecológica e economize na conta de energia com nossa tecnologia de ponta.",
      image: energiasolar
    },
    {
      id: 4,
      title: "Acabamento e decoração",
      description: "Dê os toques finais ao seu projeto com nossos serviços de acabamento e decoração. Escolha entre uma variedade de revestimentos, pinturas e detalhes decorativos para criar o ambiente perfeito. Além disso, oferecemos instalação de sistemas de ar condicionado modernos, garantindo o conforto térmico do seu espaço.",
      image: acabamentodecoracao
    },
    {
      id: 3,
      title: "Ampliação",
      description: "Precisa de mais espaço? Nossos serviços de ampliação oferecem soluções personalizadas, seja adicionando andares, estendendo áreas ou construindo anexos.",
      image: ampliacao
    }
  ]

  return (
    <div className="flex flex-col w-full items-center">
           <Title text='Um pouco do que oferecemos' size='lg' color='blue'/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({id, title, description, image} : IService) => (
            <motion.div key={title} className="inline-block px-3 mt-10"
            initial={{ opacity: 0}} 
            animate={{ opacity: 1}} 
            transition={{ duration: 0.3 * id, delay: id * 0.5 }}>
              <div
                className="w-full h-full overflow-hidden rounded-lg border-2 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex relative h-48 w-full">
                  <Image src={image} className='object-cover' alt={description} fill/> 
                </div>
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
