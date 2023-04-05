import * as animationData from "../success.json";
import { motion } from 'framer-motion';
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
  }, 2999);

  return (  <motion.div
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
      </motion.div>);
}