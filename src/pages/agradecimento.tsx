import * as animationData from "../success.json";
import { motion } from 'framer-motion';
import Head from "next/head";
import { useRouter } from "next/router";
import Lottie from "react-lottie";

export default function Agradecimento(){
  const router = useRouter();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  setTimeout(() => {
    router.push('/');
  }, 3999);

  return ( 
    <>
    <Head>
      <link rel="icon" href="https://helphome.srv.br/wp-content/uploads/2021/08/cropped-favicon-32x32.png" sizes="32x32" />
        <title>Agradecemos seu contato | Help Home São Paulo</title>
    </Head>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          ease: "easeIn",
          duration: 0.6,
        }}
        className="flex  w-full  flex-col  py-16 items-center"
      >
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="flex w-full justify-center">
            <Lottie
              options={defaultOptions}
              height={250}
              width={250}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="flex flex-col px-3">
            <h1 className="text-2xl mb-2 text-center md:text-start">
              {" "}
            Obrigado! <br/> Seu pedido foi solicitado, logo alguém da equipe entrará em contato!
            </h1>
          
          </div>
        </div>
      </motion.div>
    </>
  );
}