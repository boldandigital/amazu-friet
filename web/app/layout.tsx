import type { Metadata } from 'next';
import { Bodoni_Moda, Jost } from 'next/font/google';
import './globals.css';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-bodoni',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amazú Friet — Premium Batata | Raízes da Floresta',
  description:
    'Amazú Friet une a técnica belga da dupla fritura a uma alma portuguesa. Batata doce canelada, tucupi preto, queijo Marajó e polpa de fruta prensada na hora, servidos na caixa kraft. Belém, Pará.',
  openGraph: {
    title: 'Amazú Friet — Premium Batata | Raízes da Floresta',
    description:
      'Técnica belga, alma portuguesa. Batata canelada, tucupi preto e polpa de fruta do Ver-o-Peso, Belém.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
