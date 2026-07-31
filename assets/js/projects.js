/* ============================================================
   BE ARCH — DADOS DOS PROJETOS
   ------------------------------------------------------------
   Este é o ÚNICO lugar que você precisa editar para adicionar,
   remover ou alterar um projeto do portfólio.

   Para cada projeto:
     slug     -> identificador na URL (sem espaços/acentos). Ex.: "rosemar"
     title    -> nome exibido
     category -> categoria (ex.: "Interiores · Residencial")
     cover    -> imagem de capa (usada na home e no portfólio)
     location -> cidade/UF
     year     -> ano
     area     -> metragem (opcional, deixe "" se não quiser mostrar)
     description -> texto curto que aparece na página do projeto
     featured -> true para aparecer na HOME (mostramos os 3 primeiros featured)
     images   -> lista de fotos da galeria (troque pelos arquivos reais,
                 mantendo a pasta assets/img/portfolio/<slug>/)
   ============================================================ */

window.BE_PROJECTS = [
  {
    slug: "rosemar",
    title: "Rosemar",
    category: "Arquitetônico · Residencial",
    cover: "/assets/img/portfolio/rosemar/cover.jpg",
    location: "Gaspar, SC",
    year: "2024",
    area: "260 m²",
    featured: true,
    description: "Projeto arquitetônico residencial pensado a partir do terreno e do modo de viver da família. Volumes limpos, luz natural e materiais naturais dão origem a uma casa acolhedora e atemporal.",
    images: [
      "/assets/img/portfolio/rosemar/01.jpg",
      "/assets/img/portfolio/rosemar/02.jpg",
      "/assets/img/portfolio/rosemar/03.jpg",
      "/assets/img/portfolio/rosemar/04.jpg",
      "/assets/img/portfolio/rosemar/05.jpg"
    ]
  },
  {
    slug: "life-alive",
    title: "Life Alive",
    category: "Arquitetônico · Comercial",
    cover: "/assets/img/portfolio/life-alive/cover.jpg",
    location: "Balneário Camboriú, SC",
    year: "2023",
    area: "180 m²",
    featured: true,
    description: "Projeto arquitetônico comercial que traduz a identidade da marca em espaço físico. Fluxo, iluminação e materialidade trabalham juntos para criar uma experiência marcante para o cliente.",
    images: [
      "/assets/img/portfolio/life-alive/01.jpg",
      "/assets/img/portfolio/life-alive/02.jpg",
      "/assets/img/portfolio/life-alive/03.jpg",
      "/assets/img/portfolio/life-alive/04.jpg",
      "/assets/img/portfolio/life-alive/05.jpg"
    ]
  },
  {
    slug: "lari-caio",
    title: "Lari & Caio",
    category: "Interiores · Residencial",
    cover: "/assets/img/portfolio/lari-caio/cover.jpg",
    location: "Blumenau, SC",
    year: "2024",
    area: "120 m²",
    featured: true,
    description: "Projeto de interiores completo para um jovem casal. Marcenaria sob medida, iluminação cênica e uma paleta quente resultam em ambientes funcionais e cheios de personalidade.",
    images: [
      "/assets/img/portfolio/lari-caio/01.jpg",
      "/assets/img/portfolio/lari-caio/02.jpg",
      "/assets/img/portfolio/lari-caio/03.jpg",
      "/assets/img/portfolio/lari-caio/04.jpg",
      "/assets/img/portfolio/lari-caio/05.jpg"
    ]
  },
  {
    slug: "djeizon",
    title: "Djeizon",
    category: "Arquitetônico · Comercial",
    cover: "/assets/img/portfolio/djeizon/cover.jpg",
    location: "Itajaí, SC",
    year: "2023",
    area: "150 m²",
    featured: false,
    description: "Projeto arquitetônico comercial com foco em presença e funcionalidade. Cada decisão de projeto reforça o posicionamento da marca e a experiência de quem circula pelo espaço.",
    images: [
      "/assets/img/portfolio/djeizon/01.jpg",
      "/assets/img/portfolio/djeizon/02.jpg",
      "/assets/img/portfolio/djeizon/03.jpg",
      "/assets/img/portfolio/djeizon/04.jpg",
      "/assets/img/portfolio/djeizon/05.jpg"
    ]
  },
  {
    slug: "maria-junior",
    title: "Maria & Júnior",
    category: "Interiores · Residencial",
    cover: "/assets/img/portfolio/maria-junior/cover.jpg",
    location: "Timbó, SC",
    year: "2024",
    area: "140 m²",
    featured: false,
    description: "Reforma e interiores que renovaram por completo o modo de viver da família. Integração dos ambientes, conforto e uma estética elegante e duradoura.",
    images: [
      "/assets/img/portfolio/maria-junior/01.jpg",
      "/assets/img/portfolio/maria-junior/02.jpg",
      "/assets/img/portfolio/maria-junior/03.jpg",
      "/assets/img/portfolio/maria-junior/04.jpg",
      "/assets/img/portfolio/maria-junior/05.jpg"
    ]
  },
  {
    slug: "joao-rudolf",
    title: "João Rudolf",
    category: "Interiores · Residencial",
    cover: "/assets/img/portfolio/joao-rudolf/cover.jpg",
    location: "Gaspar, SC",
    year: "2023",
    area: "95 m²",
    featured: false,
    description: "Projeto de interiores que equilibra sofisticação e aconchego. Materiais naturais e uma paleta serena criam um refúgio contemporâneo.",
    images: [
      "/assets/img/portfolio/joao-rudolf/01.jpg",
      "/assets/img/portfolio/joao-rudolf/02.jpg",
      "/assets/img/portfolio/joao-rudolf/03.jpg",
      "/assets/img/portfolio/joao-rudolf/04.jpg",
      "/assets/img/portfolio/joao-rudolf/05.jpg"
    ]
  },
  {
    slug: "lucas-goedert",
    title: "Lucas Goedert",
    category: "Interiores · Residencial",
    cover: "/assets/img/portfolio/lucas-goedert/cover.jpg",
    location: "Florianópolis, SC",
    year: "2024",
    area: "110 m²",
    featured: false,
    description: "Interiores desenhados nos mínimos detalhes, do layout à iluminação. Um espaço leve, funcional e com forte identidade.",
    images: [
      "/assets/img/portfolio/lucas-goedert/01.jpg",
      "/assets/img/portfolio/lucas-goedert/02.jpg",
      "/assets/img/portfolio/lucas-goedert/03.jpg",
      "/assets/img/portfolio/lucas-goedert/04.jpg",
      "/assets/img/portfolio/lucas-goedert/05.jpg"
    ]
  },
  {
    slug: "bela-dama",
    title: "Bela Dama",
    category: "Interiores · Comercial",
    cover: "/assets/img/portfolio/bela-dama/cover.jpg",
    location: "Blumenau, SC",
    year: "2023",
    area: "80 m²",
    featured: false,
    description: "Projeto de interiores comercial que transforma o ponto de venda em experiência. Ambiente elegante, acolhedor e alinhado à identidade da marca.",
    images: [
      "/assets/img/portfolio/bela-dama/01.jpg",
      "/assets/img/portfolio/bela-dama/02.jpg",
      "/assets/img/portfolio/bela-dama/03.jpg",
      "/assets/img/portfolio/bela-dama/04.jpg",
      "/assets/img/portfolio/bela-dama/05.jpg"
    ]
  },
  {
    slug: "beauty-garden",
    title: "Beauty Garden",
    category: "Interiores · Comercial",
    cover: "/assets/img/portfolio/beauty-garden/cover.jpg",
    location: "Itajaí, SC",
    year: "2024",
    area: "130 m²",
    featured: false,
    description: "Espaço comercial pensado para encantar. Paleta natural, iluminação cuidadosa e detalhes que valorizam cada momento do cliente.",
    images: [
      "/assets/img/portfolio/beauty-garden/01.jpg",
      "/assets/img/portfolio/beauty-garden/02.jpg",
      "/assets/img/portfolio/beauty-garden/03.jpg",
      "/assets/img/portfolio/beauty-garden/04.jpg",
      "/assets/img/portfolio/beauty-garden/05.jpg"
    ]
  },
  {
    slug: "andritex",
    title: "Andritex",
    category: "Interiores · Comercial",
    cover: "/assets/img/portfolio/andritex/cover.jpg",
    location: "Gaspar, SC",
    year: "2023",
    area: "210 m²",
    featured: false,
    description: "Projeto de interiores corporativo que une funcionalidade e sofisticação. Ambientes de trabalho que refletem a solidez e os valores da empresa.",
    images: [
      "/assets/img/portfolio/andritex/01.jpg",
      "/assets/img/portfolio/andritex/02.jpg",
      "/assets/img/portfolio/andritex/03.jpg",
      "/assets/img/portfolio/andritex/04.jpg",
      "/assets/img/portfolio/andritex/05.jpg"
    ]
  }
];
