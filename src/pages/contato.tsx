
import Image from 'next/image';
import formImage from '../images/formulario.webp';
import Title from '@/components/Title';
import Input from '@/components/Input';
import { Button } from '@/components/Button';
import InputMask from 'react-input-mask';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { ContactContext, IContact } from '@/hook/contact.hook';
import axios from 'axios';

export default function Form() : JSX.Element{

  const {
    email,
    setEmail,
    cellphone,
    setCellphone,
    description,
    setDescription,
    name,
    setName,
    service,
    setService
   } = useContext<IContact>(ContactContext);

   const [isLoading, setIsLoading] = useState<boolean>(false);

   async function handle(){ 
    setIsLoading(!isLoading);

    await axios.post('/api/mail', {
      email,
      cellphone,
      description,
      name
    });

    setIsLoading(!isLoading);
   }

  return (
    <motion.div 
      className="flex h-screen justify-center bg-gray-50"
      initial={{ opacity: 0}} 
      animate={{ opacity: 1}} 
      transition={{ duration: 0.5}}
      >
      <div className="h-full w-auto hidden md:flex">
        <Image src={formImage} className='max-h-screen' alt='Informe seu dados pessoais'/>
      </div>
      <div className="w-full bg-white max-w-lg flex flex-col justify-center rounded-lg p-3 shadow-lg">
        <div className="flex md:px-12 mb-10">
          <Title text='Formulário' size='lg'/>
          <Title text='de serviço' size='lg' color='orange'/>
        </div>
        <div className="flex flex-col md:pl-12 gap-3">
        <div className="flex w-full justify-around gap-3">
          <Input placeholder='Nome Sobrenome' defaultValue={name} onChange={(ev : any) => setName(ev.target.value)}/>
          <InputMask mask="(99) 99999-9999" 
                     placeholder='Telefone' 
                     className='p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500'
                     value={cellphone}
                     onChange={(ev : any) => setCellphone(ev.target.value)}
                    />
        </div>
        <div className="flex w-full ">
          <Input defaultValue={email} placeholder='E-mail'  onChange={(ev : any) => setEmail(ev.target.value)}/>
        </div>
        <div className="flex w-full">
          <textarea  value={description} onChange={(ev : any) => setDescription(ev.target.value)} cols={30} rows={3} className='resize-none w-full rounded-3xl p-5  border-2  outline-none' placeholder='Digite sobre o seu serviço'></textarea>
        </div>
        </div>
        <div className="flex justify-center w-full  md:pl-12 pt-3">
          <div className="w-full max-w-sm">
             <Button onClick={handle} loading={isLoading} className='text-center justify-center bg-orange-500 text-white' text='ENVIAR'/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}