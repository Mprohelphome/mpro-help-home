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

export default function HomeSection() : JSX.Element {

  const { name, service, setName, setService } = useContext<IContact>(ContactContext);

  const number = "5511989877583";
  const text = "Olá, gostaria de solicitar um atendimento."; 
  const router = useRouter();

  return (
    <div className="flex flex-col items-end pt-8 lg:pt-20 lg:flex-row w-full justify-around pb-48 gap-8">
      <Carousel/>
      <div className="flex w-full justify-center">
        <Card color="default" className='bg-white'>
          <div className="flex flex-col">
            <Title text='Comece seu' size='lg'/>
            <div className="flex gap-1">  
                <Title text='orçamento' size='lg'/>
                <Title text='aqui.' color='orange' size='lg'/>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Input placeholder="Nome Sobrenome" onChange={(ev : any) => setName(ev.target.value)}/>
            <Input placeholder="Serviço" onChange={(ev : any) => setService(ev.target.value)}/>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonOrange text='CONTINUAR' icon={<HiOutlineArrowNarrowRight/>} onClick={() => router.push('/contato')}/>
            <Paragraph text='ou realize o'/>
              <ButtonOrange text='ATENDIMENTO VIA WHATSAPP' outline onClick={() => {
                window.open("https://wa.me/" + number + "?text=" + text, '_blank');
              }}/>
          </div>
      </Card>
      </div>
    </div>
  );
}