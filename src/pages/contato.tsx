
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
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Form() : JSX.Element{
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const router = useRouter();

  const {
    email,
    setEmail,
    cellphone,
    setCellphone,
    description,
    setDescription,
    name,
    cep,
    setName,
    setCep,
    service,
    setService
   } = useContext<IContact>(ContactContext);

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const variations = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0
    }
   }
   async function handle(){ 
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email); 
    const tel = cellphone.replaceAll(/[^0-9]/gi, '');
    const address = cep.replaceAll(/[^0-9]/gi, '');
    const validTel = tel.length >= 9 && tel.length <= 13;
    if(!result || !validTel || !description || !name || address.length != 8)
      return setIsInvalid(!isInvalid);

    setIsLoading(!isLoading);

    const { data } = await axios.post('/api/mail', {
      email,
      cellphone,
      description,
      cep,
      name
    });

    setIsLoading(false)
    setIsInvalid(false);
    router.push('/agradecimento');

    setName("");
    setCellphone("");
    setEmail("");
    setDescription("");
    setService("");
    setCep("");
   }

  return (
    <>
     <Head>
      <link rel="icon" href="https://helphome.srv.br/wp-content/uploads/2021/08/cropped-favicon-32x32.png" sizes="32x32" />
        <title>Formulário de Contato | Help Home São Paulo</title>
    </Head>
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
          <motion.b 
            className='text-red-500'
            variants={variations}
            initial={'hide'} 
            animate={isInvalid ? 'show' : 'hide'} 
            transition={{ duration: 0.5}}
            > 
            Preencha  todos os campos corretamente!
          </motion.b>
        <div className="flex w-full justify-around gap-3">
          <Input placeholder='Nome Sobrenome' defaultValue={name} onChange={(ev : any) => {
            setName(ev.target.value);
            setIsInvalid(false);
          }}/>
          <InputMask mask="(99) 99999-9999" 
                     placeholder='Telefone' 
                     className='p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500'
                     value={cellphone}
                     onChange={(ev : any) =>{ setCellphone(ev.target.value); setIsInvalid(false);}}
                    />
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-3">
          <Input defaultValue={email} placeholder='E-mail'  onChange={(ev : any) => {setEmail(ev.target.value); setIsInvalid(false);}}/>
          <InputMask mask="99999-999" 
                     placeholder='CEP' 
                     className='p-2 w-full lg:max-w-[120px] rounded-full shadow-sm border-2  outline-none focus:border-orange-500'
                     value={cep}
                     onChange={(ev : any) =>{ setCep(ev.target.value); setIsInvalid(false);}}
                    />
        </div>
        <div className="flex w-full">
          <textarea  value={description} onChange={(ev : any) => {setDescription(ev.target.value); setIsInvalid(false);}} cols={30} rows={3} className='resize-none w-full rounded-3xl p-5  border-2  outline-none' placeholder='Digite sobre o seu serviço'></textarea>
        </div>
        </div>
        <div className="flex justify-center w-full  md:pl-12 pt-3">
          <div className="w-full max-w-sm">
             <Button onClick={handle} loading={isLoading} className='text-center justify-center bg-orange-500 text-white' text='ENVIAR'/>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}