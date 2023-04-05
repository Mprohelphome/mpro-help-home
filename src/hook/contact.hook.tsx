import { createContext, useState } from "react";

export interface IContact {
  name: string;
  setName: (value : string) => void;
  service: string;
  setService: (value : string) => void;
  description: string;
  setDescription: (value : string) => void;
  cellphone: string;
  setCellphone: (value : string) => void;
  email: string;
  setEmail: (value : string) => void;
  cep: string;
  setCep: (value : string) => void;
}

export const ContactContext = createContext<IContact>({
  name: "",
  setName: () => {},
  service: "",
  setService: () => {},
  description: "",
  setDescription: () => {},
  cellphone: "",
  setCellphone: () => {},
  email: "",
  setEmail: () => {},
  cep: "",
  setCep: () => {},
});

export default function ContactProvider({ children } : any){

  const [name, setName] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCep] = useState<string>("");

  return (
    <ContactContext.Provider value={{
      name,
      setName,
      service,
      setService,
      description,
      setDescription,
      cellphone,
      setCellphone,
      email,
      setEmail,
      cep,
      setCep
    }}>
      {children}
    </ContactContext.Provider>
  );
}