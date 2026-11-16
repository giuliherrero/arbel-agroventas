// Categorías de productos de Arbel Agroventas.
// Se usan en la página de inicio (tarjetas) y en Servicios (detalle).
// Las imágenes son flyers de @arbel.agroventas guardados en src/assets/images/arbel/.

export interface Categoria {
  id: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  items: string[];
  image: { src: string; alt: string };
}

export const categorias: Categoria[] = [
  {
    id: 'cosechadoras-tractores',
    title: 'Cosechadoras y tractores',
    icon: 'tabler:tractor',
    summary: 'Cosechadoras y tractores de distintas marcas y años, para la campaña que viene.',
    description:
      'Cosechadoras y tractores de distintas marcas y años. Contanos qué necesitás y te decimos qué equipos hay disponibles.',
    items: [
      'Cosechadoras Case IH, Claas y Vassalli',
      'Tractores Massey Ferguson, Zanello, John Deere y New Holland',
      'Tractores Someca y otros modelos clásicos',
    ],
    image: {
      src: '~/assets/images/arbel/cosechadora-claas-trion-710.jpg',
      alt: 'Flyer de Arbel Agroventas con una cosechadora Claas Trion 710 en un galpón',
    },
  },
  {
    id: 'cabezales-plataformas',
    title: 'Cabezales y plataformas',
    icon: 'tabler:plant-2',
    summary: 'Cabezales maiceros, girasoleros y plataformas draper para cosechar sin vueltas.',
    description:
      'Cabezales y plataformas para maíz, girasol y cereales. También hacemos negocios de cambio entre equipos.',
    items: [
      'Cabezales maiceros Allochis, Tecnorural y Ombú',
      'Plataformas draper e Hidroflex de 35 pies',
      'Cabezales girasoleros',
    ],
    image: {
      src: '~/assets/images/arbel/cabezal-maicero-allochis.jpg',
      alt: 'Flyer de Arbel Agroventas con un cabezal maicero Allochis de 14 surcos a 52',
    },
  },
  {
    id: 'acoplados-tolvas',
    title: 'Acoplados y tolvas',
    icon: 'tabler:truck',
    summary: 'Acoplados, tolvas autodescargables y tolvas cementeras para el transporte.',
    description: 'Equipos para mover granos, semillas, fertilizante y cemento a granel, listos para el trabajo pesado.',
    items: [
      'Acoplados Schell, Salto, Montenegro y Bonano',
      'Tolvas autodescargables Akron y El Fierro',
      'Tolvas cementeras Randon y tolvas semilleras o fertilizadoras',
    ],
    image: {
      src: '~/assets/images/arbel/acoplado-schell.jpg',
      alt: 'Flyer de Arbel Agroventas con un acoplado rojo marca Schell año 2023',
    },
  },
  {
    id: 'sembradoras-implementos',
    title: 'Sembradoras e implementos',
    icon: 'tabler:seeding',
    summary: 'Sembradoras, fertilizadoras, rastras y otros implementos para el trabajo en el lote.',
    description: 'Implementos para sembrar, fertilizar y preparar el lote, de distintas marcas y configuraciones.',
    items: [
      'Sembradoras Migra y Templar',
      'Fertilizadoras Fercam y pulverizadores de arrastre',
      'Rastras de discos, desmalezadoras y embolsadoras',
    ],
    image: {
      src: '~/assets/images/arbel/fertilizadora-fercam.jpg',
      alt: 'Flyer de Arbel Agroventas con una fertilizadora Fercam F21 de precisión',
    },
  },
  {
    id: 'silos-estructuras',
    title: 'Silos, norias y estructuras',
    icon: 'tabler:building-warehouse',
    summary: 'Silos, norias, básculas, caladores hidráulicos, galpones y tinglados.',
    description:
      'Infraestructura para almacenar, pesar y proteger la producción: silos, norias, básculas y caladores hidráulicos, además de galpones, estructuras metálicas y tinglados.',
    items: [
      'Silos y silos comederos de autoconsumo',
      'Norias, básculas y caladores hidráulicos',
      'Galpones, estructuras metálicas y tinglados',
    ],
    image: {
      src: '~/assets/images/arbel/silo-comedero.jpg',
      alt: 'Flyer de Arbel Agroventas con un silo comedero de 2 toneladas para autoconsumo',
    },
  },
  {
    id: 'repuestos-accesorios',
    title: 'Repuestos y accesorios',
    icon: 'tabler:tools',
    summary: 'Repuestos agrícolas y accesorios para mantener tus equipos trabajando.',
    description:
      'Repuestos y accesorios agrícolas. Si buscás una pieza puntual, escribinos con la marca y el modelo del equipo.',
    items: ['Sinfines con cepillo', 'Bandas transportadoras', 'Repuestos agrícolas a consulta'],
    image: {
      src: '~/assets/images/arbel/sinfin-con-cepillo.jpg',
      alt: 'Flyer de Arbel Agroventas con un sinfín con cepillo de 154 mm de diámetro',
    },
  },
];

// Flyers de equipos publicados en el Instagram (galería de inicio).
export const flyers: { src: string; alt: string }[] = [
  { src: '~/assets/images/arbel/cosechadora-case-ih.jpg', alt: 'Flyer de una cosechadora Case IH 2166 Axial-Flow vendida por Arbel Agroventas' },
  { src: '~/assets/images/arbel/sembradora-migra.jpg', alt: 'Flyer de una sembradora Migra de 14 a 52,5 vendida por Arbel Agroventas' },
  { src: '~/assets/images/arbel/cosechadora-vassalli.jpg', alt: 'Flyer de una cosechadora Vassalli 1200 hidrostática vendida por Arbel Agroventas' },
  { src: '~/assets/images/arbel/plataforma-draper.jpg', alt: 'Flyer de una plataforma draper maicera de 35 pies de Arbel Agroventas' },
  { src: '~/assets/images/arbel/tolva-akron.jpg', alt: 'Flyer de una tolva autodescargable Akron de 20/22 toneladas' },
  { src: '~/assets/images/arbel/massey-ferguson-1340.jpg', alt: 'Flyer de un tractor Massey Ferguson 1340 entregado por Arbel Agroventas' },
  { src: '~/assets/images/arbel/tinglado.jpg', alt: 'Flyer de un tinglado de 20 por 5 metros de Arbel Agroventas' },
  { src: '~/assets/images/arbel/bascula-movil.jpg', alt: 'Flyer de una báscula móvil para hacienda de Arbel Agroventas' },
];
