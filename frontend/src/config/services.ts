interface Service {
  id: number;
  icon: string;
  name: string;
  description: string;
}

const services: Array<Service> = [
  {
    id: 1,
    icon: "FaAddressCard",
    name: "Processo de Cidadania",
    description:
      "Te ajudamos e acompanhamos em todos as fases do processo de geração da Cidadania Luxemburguesa, com muita tranquilidade."
  },
  {
    id: 2,
    icon: "FaArchway",
    name: "Passeio Turístico",
    description:
      "Conhecemos os melhores lugares e pontos turísticos do Páis, podemos te apresentar tudo com muita alegria e diversão."
  },
  {
    id: 3,
    icon: "FaPeopleCarry",
    name: "Acompanhamento",
    description:
      "Já abriu o processo pra sua Cidadania? Nós podemos te acompanhar durante sua vinda ao País para assinar todos os documentos."
  }
];

export default services;
