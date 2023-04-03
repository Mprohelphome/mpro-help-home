import { ButtonOrange } from '@/components/Button'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Title from '@/components/Title'
import Card from '@/components/Card'
import Paragraph from '@/components/Paragraph'
import Input from '@/components/Input'
import Carousel from '@/components/Carousel'

export default function HomeSection() : JSX.Element {
   const number = "11989877583";
  const text = "Olá, gostaria de solicitar um atendimento."; 

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
            <Input placeholder="Nome Sobrenome"/>
            <Input placeholder="Serviço"/>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonOrange text='CONTINUAR' icon={<HiOutlineArrowNarrowRight/>}/>
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