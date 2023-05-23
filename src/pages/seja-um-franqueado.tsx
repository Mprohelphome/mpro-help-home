
import Image from 'next/image';
import formImage from '../images/formulario.webp';
import Title from '@/components/Title';
import Input from '@/components/Input';
import { Button } from '@/components/Button';
import InputMask from 'react-input-mask';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  nome: z.string().nonempty("Preencha o campo!").min(3, 'Informe ao menos 3 caracteres!'),
  telefone: z.string().refine((tel) =>{
    let a = tel.replaceAll(/[^0-9]/gi,'');

    return a.length >= 10;
  }, {
    message: "Insira um celular válido!",
  }),
  email: z.string().email('Digite um e-mail válido!'),
  cep: z.string().refine((cep) =>{
    let a = cep.replaceAll(/[^0-9]/gi,'');

    return a.length == 8;
  }, {
    message: "CEP inválido!",
  }),
  cidade: z.string().min(3, "Informe no mínimo 3 caracteres!")
});

type IFormSchema = z.infer<typeof formSchema>

export default function Form() : JSX.Element{
  const router = useRouter();
  const [state, setState] = useState('IG');
  const [invalidState, setInvalidState] = useState(false);

  const states = [
  { nome: 'Acre', sigla: 'AC' },
  { nome: 'Alagoas', sigla: 'AL' },
  { nome: 'Amapá', sigla: 'AP' },
  { nome: 'Amazonas', sigla: 'AM' },
  { nome: 'Bahia', sigla: 'BA' },
  { nome: 'Ceará', sigla: 'CE' },
  { nome: 'Distrito Federal', sigla: 'DF' },
  { nome: 'Espírito Santo', sigla: 'ES' },
  { nome: 'Goiás', sigla: 'GO' },
  { nome: 'Maranhão', sigla: 'MA' },
  { nome: 'Mato Grosso', sigla: 'MT' },
  { nome: 'Mato Grosso do Sul', sigla: 'MS' },
  { nome: 'Minas Gerais', sigla: 'MG' },
  { nome: 'Pará', sigla: 'PA' },
  { nome: 'Paraíba', sigla: 'PB' },
  { nome: 'Paraná', sigla: 'PR' },
  { nome: 'Pernambuco', sigla: 'PE' },
  { nome: 'Piauí', sigla: 'PI' },
  { nome: 'Rio de Janeiro', sigla: 'RJ' },
  { nome: 'Rio Grande do Norte', sigla: 'RN' },
  { nome: 'Rio Grande do Sul', sigla: 'RS' },
  { nome: 'Rondônia', sigla: 'RO' },
  { nome: 'Roraima', sigla: 'RR' },
  { nome: 'Santa Catarina', sigla: 'SC' },
  { nome: 'São Paulo', sigla: 'SP' },
  { nome: 'Sergipe', sigla: 'SE' },
  { nome: 'Tocantins', sigla: 'TO' }
];


   const [isLoading, setIsLoading] = useState<boolean>(false);
    const { 
    reset,
    register, 
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<IFormSchema>({
    resolver: zodResolver(formSchema) 
  });


   async function handle(info : IFormSchema){ 
    
    if(state == 'IG')
      return setInvalidState(true);

    const estate = states.find(s => s.sigla == state);

    let post = {
      name: info.nome,
      email: info.email,
      cellphone: info.telefone,
      cep: info.cep,
      location:  info.cidade + ' - ' + estate?.nome
    }
    const { data } = await axios.post('/api/franquia', post);
    router.push('/agradecimento');
   }


   async function checkCep(cep : string){
    const value = cep.replaceAll(/[^0-9]/gi,'');

    if(value.length != 8) return;

    try {
       const { data } = await axios.get('https://viacep.com.br/ws/'+value+'/json/ ');

      if(data.uf){
        setState(data.uf);
      }

      if(data.localidade){
        reset({
          cidade: data.localidade
        });
      }
    } catch (error) {
      
    }

   }

  return (
    <>
     <Head>
      <link rel="icon" href="https://helphome.srv.br/wp-content/uploads/2021/08/cropped-favicon-32x32.png" sizes="32x32" />
        <title>Formulário de Franquia | Help Home São Paulo</title>
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
      <form onSubmit={handleSubmit(handle)} className="w-full bg-white max-w-lg flex flex-col justify-center rounded-lg p-3 shadow-lg">
        <div className="flex md:px-12 mb-10 gap-1">
          <Title text='Formulário' size='lg'/>
          <Title text='de Franquia' size='lg' color='orange'/>
        </div>
        <div className="flex flex-col md:pl-12 gap-3">
  
          <div className="flex w-full justify-around gap-3">
            <div className="flex flex-col w-full">
              <input  
                {...register('nome')}
                placeholder='Nome'
                maxLength={75} 
                className="p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500"
              />
             
              {errors.nome?.message && <span className='pl-3 font-semibold text-red-500'>{errors.nome.message}</span>}
            </div>

          <div className="flex flex-col w-full">
            <InputMask mask="(99) 99999-9999" 
                      placeholder='Telefone' 
                      {...register('telefone')}
                      className='p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500'
                      />
             {errors.telefone?.message && <span className='pl-3 font-semibold text-red-500'>{errors.telefone.message}</span>}
          </div>
          </div>
          <div className="flex flex-col lg:flex-col w-full">
            <input  
                {...register('email')}
                type='email'
                placeholder='E-mail'
                maxLength={100} 
                className="p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500"
              />
            {errors.email?.message && <span className='font-semibold text-red-500 pl-3'>{errors.email.message}</span>}
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-2">
            <div className="flex flex-col">
              <InputMask mask="99999-999" 
                placeholder='CEP' 
                
                {...register('cep', { onChange: (ev) =>checkCep(ev.target.value)})}
                className='p-2 w-full lg:max-w-[320px] rounded-full shadow-sm border-2  outline-none focus:border-orange-500'
                
                />
                {errors.cep?.message && <span className='font-semibold text-red-500 pl-3'>{errors.cep.message}</span>}
            </div>
            <div className="flex flex-col w-full">
              <select value={state} defaultValue={state} onChange={(event : any) => {
                  setInvalidState(false);
                  setState(event.target.value);
                }} className='rounded-full w-full border-2 bg-white px-6 py-2'>
                <option value="IG">ESTADO</option>
                {states.map((state: any) =>  <option key={state.sigla} value={state.sigla}>{state.nome}</option>)}
              </select>
              {
                invalidState && <span className='font-bold text-red-500'>Informe um estado válido</span>
              }
            </div>
         
          </div>
          <div className="flex w-full flex-col">
            <input  
                {...register('cidade')}
                placeholder='Cidade'
                maxLength={100} 
                className="p-2 w-full rounded-full shadow-sm border-2  outline-none focus:border-orange-500"
              />
             {errors.cidade?.message && <span className='font-semibold text-red-500 pl-3'>{errors.cidade.message}</span>}
          </div>
        </div>
        <div className="flex justify-center w-full  md:pl-12 pt-3">
          <div className="w-full max-w-sm">
             <Button 
            //@ts-ignore
              type="submit"
              loading={isLoading} 
              className='text-center justify-center bg-orange-500 text-white' 
              text='ENVIAR'/>
          </div>
        </div>
      </form>
    </motion.div>
    </>
  );
}