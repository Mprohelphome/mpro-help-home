import Image from 'next/image'
import Title from '@/components/Title'
import Card from '@/components/Card'
import ButtonWhatsapp from '@/components/ButtonWhatsapp'
import logo from '../images/logo.svg';
import wave from '../images/wave.svg';
import Paragraph from '@/components/Paragraph'
import HomeSection from '@/components/HomeSection'
import { motion } from 'framer-motion';

import image1 from '../images/1.svg';
import image2 from '../images/2.svg';
import image3 from '../images/3.svg';
import security from '../images/security.svg';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface IFlow  {
  title: string;
  description: string;
  image: string;
}

export default function Home() {

  const router = useRouter();

  const flows : IFlow[] = [
    {
      title: "Realize o orçamento",
      description: "Sua demanda é recebida por nosso time técnico, que avalia seu pedido e passa a unidade mais próxima.",
      image: image1
    },
    {
      title: "Confirme e Agende",
      description: "Nossa unidade entra em contato contigo para agendar uma visita técnica e avaliar a extensão e formular seu orçamento.",
      image: image2
    },
    {
      title: " Pronto! Obra realizada",
      description: "A obra é realizada com a melhor qualidade do mercado e totalmente coberta pela seguradora. Descanse e deixe com a gente!",
      image: image3
    },
  ];

  const flow2 : IFlow[] = [ 
    {
      title: "Seguro de obras Help Home.",
      description: 'Sua obra é segurada do começo ao fim pelas maiores seguradoras do país. Com isso você pode descansar e deixar a sua obra com a gente.',
      image: security
    },
    {
      title: "Referência de mercado",
      description: 'Atendemos grandes redes como Vivara e Hering, são mais de 15 grandes grupos que confiam no trabalho da Help Home, peça seu orçamento hoje mesmo!',
      image: security
    },
    {
      title: "Pagamento seguro",
      description: "Você pode pagar sua obra à vista ou parcelado, parcelamos em até 10x sem juros sua obra, com segurança e agilidade para você, e sua familia.",
      image: security
    },
  ]

  return (
    <>
    <Head>
    <link rel="icon" href="https://helphome.srv.br/wp-content/uploads/2021/08/cropped-favicon-32x32.png" sizes="32x32" />
      <title>Help Home São Paulo</title>
    </Head>
      <header className='flex w-full pl-8 pt-5'>
        <Image src={logo} alt='Help Home Logo'/>
      </header>
      <motion.main 
      className='flex flex-col w-full h-full' 
      initial={{ opacity: 0}} 
      animate={{ opacity: 1}} 
      transition={{ duration: 0.5}}
      >
        <Image src={wave} className='absolute right-0 top-0 -z-10 hidden md:block' alt="wave decoration"/>
        <ButtonWhatsapp/>
        <HomeSection/>
        <div className="flex w-full relative justify-center py-28 bg-[#F9F9F9]">
          <Card color='orange' className='absolute -top-20 bg-white'>
            <div className="grid grid-cols-2 divide-x divide-dashed divide-orange-500 ">
              <div className='flex flex-col items-center w-full text-center px-3'>
                <Title text='+1,200' size='lg' color='orange'/>
                <p className="text-lg font-bold text-gray-700">
                  Demandas por 
                  <br/>mês
                </p>
              </div>
              <div className='flex flex-col items-center w-full text-center px-3'>
                <Title text='+15' size='lg' color='orange'/>
                <p className="text-lg flex text-center font-bold text-gray-700">
                  empresas
                  <br/>parceiras
                </p>
              </div>
            </div>
          </Card>

          <div className="grid  grid-cols-1 md:grid-cols-2 w-full  py-24">
            <div className='flex w-full flex-col px-8 md:px-24 gap-10'>
              <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 0.8}}
              className="flex gap-1 flex-wrap mb-10">
                <Title text="Como" size='lg'/>
                <Title text="trabalhamos" size='lg' color='orange'/>
                <Title text="sua" size='lg'/>
                <Title text="demanda?" size='lg'/>
              </motion.div>
              {flows.map(({title, description, image} : IFlow) => (
              <Card key={title} color='orange' className='bg-white border-l-4 border-orange-500'>
                <div className="flex flex-col md:flex-row w-full h-full gap-4">
                  <Image src={image} alt={title + ' - ' + description} width={280}/>
                  <div className="flex flex-col">
                     <Title text={title}/>
                     <Paragraph text={description}/>
                  </div>
                </div>
              </Card>
              ))}
            </div>
            <div className='flex w-full flex-col gap-10 py-16 px-2 md:px-0 md:py-0'>
              <div className="flex gap-1 flex-wrap px-8 md:px-24 mb-10">
                <Title text="Como" size='lg'/>
                <Title text="resolvemos" size='lg' color='orange'/>
                <Title text="sua" size='lg'/>
                <Title text="demanda?" size='lg'/>
              </div>
              {flow2.map(({title, description, image} : IFlow) => (<Card key={title} color='default' className='bg-orange-500 w-full rounded-tr-0'>
               <div className="flex flex-col items-center md:flex-row w-full h-full gap-4">
                  <Image src={image} alt={title + ' - ' + description} width={200}/>
                  <div className="flex flex-col">
                     <Title text={title} color='white'/>
                     <Paragraph text={description} color="text-white"/>
                  </div>
                </div>
              </Card>))}
            </div>
          </div>
        </div>
      </motion.main>
    </>
  )
}
