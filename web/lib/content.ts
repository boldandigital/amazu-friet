/**
 * Amazú Friet - conteúdo.
 *
 * A copy segue o design system do Open Design (amaz-friet-design-system):
 * refinada, acolhedora, criteriosa. Sem pontos de exclamação, sem travessões,
 * sem origem ou benefício inventado. Nomes, pesos, preços e descrições dos
 * produtos foram transcritos do cardápio real da Amazú.
 */

export const ORDER_URL = process.env.NEXT_PUBLIC_ORDER_URL ?? '#order';
export const MENU_URL = process.env.NEXT_PUBLIC_MENU_URL ?? '#cardapio';

export type Tone = 'gold' | 'plum' | 'line';

export type Product = {
  id: string;
  name: string;
  badges: { label: string; tone: Tone }[];
  weight: string;
  price?: string;
  priceNote?: string;
  body: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: 'doce',
    name: 'Friet Doce',
    badges: [{ label: 'Vegano', tone: 'plum' }],
    weight: '250 g',
    price: 'R$ 29,90',
    body: 'Batata doce roxa, brigadeiro Amazú de cupuaçu com priprioca e farofa de castanha. Doce que não enjoa, que encanta.',
    image: '/images/friet-doce.jpg',
    alt: 'Batatas caneladas com brigadeiro escuro, caju e farofa de castanha por cima.',
  },
  {
    id: 'tucupi',
    name: 'Friet Tucupi Preto',
    badges: [{ label: 'Mais pedida', tone: 'gold' }],
    weight: '300 g',
    price: 'R$ 32,90',
    body: 'Nossa assinatura. Batata artesanal dupla fritura, tucupi preto fermentado 8h do Ver-o-Peso, jambu que treme e castanha-do-pará crocante.',
    image: '/images/tucupi-preto.jpg',
    alt: 'Caixa kraft de batatas caneladas cobertas de tucupi preto, pimenta, caju e folhas frescas.',
  },
  {
    id: 'marajo',
    name: 'Queijo Marajó',
    badges: [{ label: 'Da Ilha', tone: 'line' }],
    weight: 'Porção individual',
    priceNote: 'Consulte o preço de hoje',
    body: 'Queijo Marajó derretido da Ilha, charque de búfalo desfiado e leve toque de tucupi. Conforto paraense em forma belgesa.',
    image: '/images/queijo-marajo.jpg',
    alt: 'Caixa kraft de batatas com queijo derretido e charque desfiado sobre folha de banana.',
  },
  {
    id: 'pulp',
    name: 'Pulp Cupuaçu / Manga / Maracujá',
    badges: [{ label: 'Natural', tone: 'plum' }],
    weight: '400 ml',
    price: 'R$ 12,00',
    body: 'Polpa pura, sem água, sem açúcar. Congelada na hora da safra. Cupuaçu, manga e maracujá puros do Ver-o-Peso.',
    image: '/images/pulp.jpg',
    alt: 'Dois copos de polpa de fruta prensada, um creme claro e um laranja dourado.',
  },
];

export const facts: string[] = [
  'Dupla fritura',
  'Caixa kraft, garfo de bambu',
  'Ver-o-Peso, Belém',
];

export const steps: { index: string; title: string; body: string }[] = [
  {
    index: '01',
    title: 'No mercado',
    body: 'No Ver-o-Peso, em Belém, o tucupi e o cupuaçu são escolhidos à mão. O resto é preparado na cozinha.',
  },
  {
    index: '02',
    title: 'Cortada e fritada',
    body: 'A batata é cortada em cristas e frita duas vezes: uma para cozinhar por dentro, outra para ganhar cor.',
  },
  {
    index: '03',
    title: 'Na caixa',
    body: 'Porções individuais de 250 a 320 gramas, servidas na caixa kraft com garfo de bambu. Nada pronto e nenhum molho à parte.',
  },
];

export const ingredients: { name: string; body: string }[] = [
  { name: 'Cupuaçu', body: 'A polpa do fruto que dá profundidade ao brigadeiro Amazú.' },
  { name: 'Priprioca', body: 'Flor aromática, tostada levemente sobre a batata doce.' },
  { name: 'Castanha-do-pará', body: 'Quebrada em lascas e espalhada sobre o prato pronto.' },
  { name: 'Tucupi preto', body: 'Tucupi preto, fermentado por oito horas no Ver-o-Peso.' },
  { name: 'Jambu', body: 'Ervas que se mexem na boca, crocantes desde a primeira mordida.' },
  { name: 'Maracujá', body: 'Polpa de maracujá, congelada na hora da safra.' },
  { name: 'Manga', body: 'Polpa de manga, congelada na hora da safra.' },
  { name: 'Queijo Marajó', body: 'Queijo da ilha, derretido direto sobre a batata.' },
];

export const nav = [
  { href: '#cardapio', label: 'O cardápio' },
  { href: '#raiz', label: 'A Raiz' },
  { href: '#terra', label: 'Da Terra à Mesa' },
  { href: '#ingredientes', label: 'Ingredientes' },
];
