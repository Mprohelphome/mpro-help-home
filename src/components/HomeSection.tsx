import { ButtonOrange } from '@/components/Button'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Title from '@/components/Title'
import Card from '@/components/Card'
import Paragraph from '@/components/Paragraph'
import Input from '@/components/Input'
import Carousel from '@/components/Carousel'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ContactContext, IContact } from '@/hook/contact.hook'
import { motion } from 'framer-motion'
import ReactInputMask from 'react-input-mask'
export default function HomeSection() : JSX.Element {

  const { name, service, cellphone, setCellphone, setName, setService } = useContext<IContact>(ContactContext);

  const number = "5511989877583";
  const text = "Olá, gostaria de solicitar um atendimento."; 
  const router = useRouter();

  return (
    <div className="flex flex-col items-end lg:px-10 pt-8 lg:flex-row w-full justify-around pb-48 gap-8 relative">
      <Carousel/>
      <motion.div 
       initial={{
         width: 0
       }}
       animate={{
        width: "100%"
       }}
       transition={{
        duration: 0.8
       }}
      className="flex w-full max-w-lg justify-center lg:justify-start h-full self-start lg:pt-20">
        <Card color="default" className='bg-white'>
          <div className="flex flex-col" id="contact">
            <Title text='Comece seu' size='lg'/>
            <div className="flex gap-1">  
                <Title text='orçamento' size='lg'/>
                <Title text='aqui.' color='orange' size='lg'/>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <Input placeholder="Nome Sobrenome" onChange={(ev : any) => setName(ev.target.value)}/>
            <Input placeholder="Serviço" onChange={(ev : any) => setService(ev.target.value)}/>
             <ReactInputMask mask="(99) 99999-9999" 
                     placeholder='Telefone' 
                     className='p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500'
                     value={cellphone}
                     onChange={(ev : any) =>{ setCellphone(ev.target.value);}}
                    />
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonOrange text='CONTINUAR' icon={<HiOutlineArrowNarrowRight/>} onClick={() => router.push('/contato')}/>
            <Paragraph text='ou realize o'/>
              <ButtonOrange text='ATENDIMENTO VIA WHATSAPP' outline onClick={() => {
                window.open("https://wa.me/" + number + "?text=" + text, '_blank');
              }}/>
          </div>
      </Card>
      </motion.div>
    </div>
  );
}